import google.generativeai as genai
import os

genai.configure(api_key=os.environ["API_KEY"])
gemini_model = genai.GenerativeModel('gemini-pro')

def create_headers(graph):
    was_seen = set()
    headers = {}
    for key, sentences in graph.items():
        if key not in was_seen:
            was_seen.add(key)
            was_seen.update(sentences)

            similar_sentences = list(set([key] + sentences))
            input_text = " ".join(similar_sentences)
            
            header = (gemini_model.generate_content(f'Summarize the following sentences into a concise 3 to 4 word header for note-taking: {input_text}'))
            header_text = header.text.strip().replace('**', '')
            
            headers[header_text] = similar_sentences
    return headers

def get_gemini_model():
    return gemini_model
