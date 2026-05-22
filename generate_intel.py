import os
import requests
import time
from bs4 import BeautifulSoup
from google import genai

# Initialize client
client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

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
            all_text += soup.get_text()[:1500] 
        except: continue
    return all_text

def get_best_model():
    """Finds a model that supports generateContent."""
    # We look for Flash models as they are best for free-tier automation
    for m in client.models.list():
        if "flash" in m.name and "generateContent" in m.supported_methods:
            return m.name
    return "gemini-2.0-flash" # Fallback

def update_intel():
    news_data = fetch_content()
    prompt = f"Analyze this data: {news_data}. Generate JSON for AEON INTEL."
    
    model_name = get_best_model()
    print(f"AEON INTEL using model: {model_name}")

    try:
        response = client.models.generate_content(
            model=model_name,
            contents=prompt
        )
        
        with open("template.js", "w") as f:
            f.write(f"const dailyData = {response.text}")
        print("Update successful.")
        
    except Exception as e:
        print(f"Update failed: {e}")
        # If we hit a 429 quota error, we wait 60 seconds
        if "429" in str(e):
            print("Quota reached, waiting for next hour...")
        exit(1)

if __name__ == "__main__":
    update_intel()
