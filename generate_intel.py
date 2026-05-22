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
    "https://www.ft.com/technology", "https://www.dowjones.com/newswires",
    "https://www.cnbc.com/technology", "https://venturebeat.com",
    "https://www.aibusiness.com", "https://www.cio.com",
    "https://www.infoworld.com", "https://www.techtarget.com",
    "https://www.technologyreview.com", "https://spectrum.ieee.org",
    "https://hai.stanford.edu", "https://dl.acm.org",
    "https://nvidianews.nvidia.com", "https://www.tsmc.com/english/news_events",
    "https://www.asml.com/en/news", "https://www.intel.com/content/www/us/en/newsroom",
    "https://www.amd.com/en/corporate/newsroom", "https://aws.amazon.com/blogs/aws",
    "https://cloud.google.com/blog", "https://azure.microsoft.com/en-us/blog",
    "https://openai.com/research", "https://www.anthropic.com/news",
    "https://deepmind.google/discover", "https://ai.meta.com/blog",
    "https://mistral.ai/news", "https://www.gartner.com/en/newsroom",
    "https://www.weforum.org/agenda/technology", "https://artificialintelligenceact.eu"
]

JSON_TEMPLATE = """
{
  "main": {"kicker": "AEON INTEL", "titleWhite": "REQUIRED", "titleBlue": "REQUIRED"},
  "slides": [
    {"id": 1, "heading": "CAT: HEADLINE", "points": ["", "", "", ""], "imageUrl": "", "tags": []},
    {"id": 2, "heading": "CAT: HEADLINE", "points": ["", "", "", ""], "imageUrl": "", "tags": []},
    {"id": 3, "heading": "CAT: HEADLINE", "points": ["", "", "", ""], "imageUrl": "", "tags": []},
    {"id": 4, "heading": "CAT: HEADLINE", "points": ["", "", "", ""], "imageUrl": "", "tags": []},
    {"id": 5, "heading": "CAT: HEADLINE", "points": ["", "", "", ""], "imageUrl": "", "tags": []},
    {"id": 6, "heading": "CAT: HEADLINE", "points": ["", "", "", ""], "imageUrl": "", "tags": []},
    {"id": 7, "heading": "CAT: HEADLINE", "points": ["", "", "", ""], "imageUrl": "", "tags": []}
  ]
}
"""

def fetch_content():
    all_text = ""
    for url in SOURCES:
        try:
            response = requests.get(url, timeout=8)
            soup = BeautifulSoup(response.content, 'html.parser')
            all_text += f"\nSOURCE: {url}\n" + soup.get_text()[:1200]
        except Exception: continue
    return all_text

def update_intel():
    news_data = fetch_content()
    prompt = f"""
    Analyze the following data to generate an AEON INTEL report.
    STRICT FORMAT: {JSON_TEMPLATE}
    SYSTEM DIRECTIVES:
    1. Output ONLY valid JSON. No markdown, no code blocks, no conversational text.
    2. Ensure exactly 7 slides.
    3. Every point must be 12-18 words, removing '[Label]:' tags.
    4. Fill 'titleWhite' with first 3-5 words of theme, 'titleBlue' with the last word.
    5. Data to analyze: {news_data}
    """
    
    success = False
    for model_name in MODEL_PRIORITY:
        try:
            print(f"Attempting model: {model_name}")
            response = client.models.generate_content(
                model=model_name,
                contents=prompt,
                config={"response_mime_type": "application/json"}
            )
            
            with open("template.js", "w") as f:
                f.write(f"const dailyData = {response.text}")
            
            print(f"Success with {model_name}")
            success = True
            break
        except Exception as e:
            print(f"Model {model_name} failed: {e}")
    
    if not success: exit(1)

if __name__ == "__main__":
    update_intel()
