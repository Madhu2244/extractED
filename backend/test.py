import google.generativeai as genai
import os
import re

genai.configure(api_key=os.environ["API_KEY"])
gemini_model = genai.GenerativeModel('gemini-pro')

def youtube_url_generator(topics):

    youtube_urls = []

    base_prompt = (
        "Based on the given topic, provide ONLY one youtube link to the most relevant and informative tutorial associated "
        "to the topic. It should only be the url link, do not include the title of the video."
    )

    for topic in topics:
        prompt = f"{base_prompt}\n\nTopic: '{topic}'\n\n"

        # Generate content using Gemini model
        response = gemini_model.generate_content(prompt)
        youtube_url = response.text

        # # Handle cases where no URL is found (optional)
        # if not youtube_url:
        #     youtube_url = "No URL found"  # Placeholder

        youtube_urls.append(youtube_url)

    return youtube_urls

# Example usage
topics = ["deep learning", "quantum mechanics for beginners", "sustainable living"]
urls = youtube_url_generator(topics)
for url in urls:
    print(url)