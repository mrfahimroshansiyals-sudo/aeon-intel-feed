import os
import requests
from bs4 import BeautifulSoup
import google.generativeai as genai
import json

# Configure Gemini
genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel('gemini-1.5-pro')

# The 30 source list
SOURCES = [
    "https://www.bloomberg.com/technology", "https://www.reuters.com/technology",
    "https://www.ft.com/technology", "https://venturebeat.com",
    "https://www.aibusiness.com", "https://www.technologyreview.com",
    "https://spectrum.ieee.org", "https://nvidianews.nvidia.com",
    "https://aws.amazon.com/blogs/aws", "https://cloud.google.com/blog"
    # ... (Add the remaining 20 URLs here)
]

def fetch_content():
    all_text = ""
    for url in SOURCES:
        try:
            response = requests.get(url, timeout=10)
            soup = BeautifulSoup(response.content, 'html.parser')
            all_text += soup.get_text()[:5000] # Get first 5k chars per site
        except: continue
    return all_text

def update_intel():
    news_data = fetch_content()
    prompt = f"Analyze this data: {news_data}. Generate JSON for AEON INTEL following the template..."
    response = model.generate_content(prompt)
    
    # Save output
    with open("template.js", "w") as f:
        f.write(f"const dailyData = {response.text}")

if __name__ == "__main__":
    update_intel()
