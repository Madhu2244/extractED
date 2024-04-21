from summarization.header_generation import get_gemini_model

def get_subject_tag(headers, summaries, sentences, notes):
    gemini_model = get_gemini_model()

    payload = {
        'headers': headers,
        'summaries': summaries,
        'sentences': sentences,
        'notes': notes,
    }

    prompt = f"Given {payload}, generate a suitable subject tag such as Biology, Chemistry, Calculus, Linear Algebra, Literature, etc. for this presentation"

    subject_tag = gemini_model.generate_content(prompt)
        
    return subject_tag.text

from summarization.header_generation import get_gemini_model

def get_notes_title(headers, summaries, sentences, notes):
    gemini_model = get_gemini_model()

    payload = {
        'headers': headers,
        'summaries': summaries,
        'sentences': sentences,
        'notes': notes,
    }

    prompt = f"Given {payload}, generate a suitable title for the notes page such as Integration, Proofs, Vectors, Thermodynamics, Ecology, Quantum Mechanics, AI, Cultural History, etc. for this presentation"

    notes_title = gemini_model.generate_content(prompt)
        
    return notes_title.text

