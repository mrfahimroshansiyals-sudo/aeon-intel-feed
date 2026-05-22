import os
import requests
from bs4 import BeautifulSoup
from google import genai
from google.genai.errors import APIError

# Initialize client using the GEMINI_API_KEY from your GitHub Secrets
client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

# Define your preferred model and a backup model
MODEL_CHAIN = ["gemini-2.0-flash", "gemini-1.5-flash"]

SOURCES = [
    "https://www.bloomberg.com/technology", "https://www.reuters.com/technology",
    "https://www.ft.com/technology", "https://venturebeat.com",
    "https://www.aibusiness.com", "https://www.technologyreview.com",
    "https://spectrum.ieee.org", "https://nvidianews.nvidia.com",
    "https://aws.amazon.com/blogs/aws", "https://cloud.google.com/blog"
]

def fetch_content():
    all_text = ""
    for url in SOURCES:
        try:
            response = requests.get(url, timeout=10)
            soup = BeautifulSoup(response.content, 'html.parser')
            all_text += soup.get_text()[:2000] # Reduced to stay within token limits
        except: continue
    return all_text

def update_intel():
    news_data = fetch_content()
    prompt = f"Analyze this data: {news_data}. Generate JSON for AEON INTEL."
    
    success = False
    for model_name in MODEL_CHAIN:
        try:
            print(f"Attempting to use model: {model_name}")
            response = client.models.generate_content(
                model=model_name,
                contents=prompt
            )
            
            with open("template.js", "w") as f:
                f.write(f"const dailyData = {response.text}")
            
            print(f"Successfully updated with {model_name}")
            success = True
            break
            
        except Exception as e:
            print(f"Model {model_name} failed with error: {e}")
            continue

    if not success:
        print("All models in chain failed.")
        exit(1)

if __name__ == "__main__":
    update_intel()
