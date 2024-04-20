from summarization.header_generation import get_gemini_model
import re

gemini_model = get_gemini_model()

def generate_notes_from_summaries(summaries):
    notes = {}
    
    for header, summary in summaries.items():
        prompt = f"List the important information: {summary}"
        content_response = gemini_model.generate_content(prompt)
        
        if content_response.text:
            content = content_response.text
            content = clean_content(content)
        
            notes[header] = content
    
    return notes

# Cleans up the bullet points
def clean_content(content):
    content = re.sub(r'\*+', '', content)  
    content = re.sub(r'\n+', '\n', content)  
    content = re.sub(r'\s+', ' ', content) 
    content = content.replace('-', '')
    bullet_points = content.strip().split('\n')
    bullet_points = [bp.strip() for bp in bullet_points if bp.strip()]
    return bullet_points
