import os
import google.generativeai as genai

# Setup the API connection using the secret we stored
api_key = os.environ["GEMINI_API_KEY"]
genai.configure(api_key=api_key)

model = genai.GenerativeModel('gemini-1.5-flash')

def generate_news():
    # This is where your Master Prompt will live
    prompt = "Analyze global AI news from the last 60 minutes and generate the JSON for AEON INTEL..."
    response = model.generate_content(prompt)
    
    # Save the output to template.js
    with open("template.js", "w") as f:
        f.write(response.text)

if __name__ == "__main__":
    generate_news()
