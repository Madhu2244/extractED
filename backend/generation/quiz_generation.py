from summarization.header_generation import get_gemini_model
import json
import re

def generate_quiz(headers, notes, questions_per_topic):
    gemini_model = get_gemini_model()

    quiz_questions = []

    json_template = {
        "question": "Replace this with the actual question",
        "options": ["option 1", "option 2", "option 3", "correct option"],
        "correct answer": "correct option"
    }

    for header in headers:
        note = notes.get(header, "")
        for _ in range(questions_per_topic):
            prompt = (
                f"Create a multiple choice question with 4 options about the topic '{header}': "
                f"1 correct answer and 3 wrong answers based on: {note}. "
                f"Use this format: {json.dumps(json_template)}"
            )
            response = gemini_model.generate_content(prompt)
            try:
                question_data = json.loads(response.text)
                quiz_questions.append(question_data)
            except json.JSONDecodeError:
                print(f"Failed to parse the response for header '{header}' as JSON.")

    return json.dumps(quiz_questions, indent=2)
