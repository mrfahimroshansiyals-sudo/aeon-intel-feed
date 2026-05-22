import os
import requests
import time
from google import genai

# Initialize the new SDK client
client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

# A prioritized list of stable models to try
# We use a list so we have an automatic fallback strategy
MODEL_PRIORITY = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash"]

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
            from bs4 import BeautifulSoup
            soup = BeautifulSoup(response.content, 'html.parser')
            all_text += soup.get_text()[:1500] 
        except Exception:
            continue
    return all_text

def update_intel():
    news_data = fetch_content()
    prompt = f"Analyze this data: {news_data}. Generate JSON for AEON INTEL."
    
    success = False
    for model_name in MODEL_PRIORITY:
        try:
            print(f"Attempting to use model: {model_name}")
            response = client.models.generate_content(
                model=model_name,
                contents=prompt
            )
            
            with open("template.js", "w") as f:
                f.write(f"const dailyData = {response.text}")
            
            print(f"Success with {model_name}")
            success = True
            break
        except Exception as e:
            print(f"Model {model_name} failed: {e}")
            continue
    
    if not success:
        print("All models failed. Check your quota.")
        exit(1)

if __name__ == "__main__":
    update_intel()
