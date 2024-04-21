from summarization.header_generation import get_gemini_model
import json

def generate_quiz(headers, notes, questions_per_topic):
    gemini_model = get_gemini_model()

    quiz_questions = []

    base_prompt = (
        "Based on the following notes, create a multiple-choice question with one correct answer and "
        "three plausible distractors. The options should be paraphrased concepts related to the notes, not direct quotes. "
        "Ensure the question is clear, concise, and specific to the topic. Format the question in JSON."
    )

    json_template = {
        "question": "Replace this with the actual question",
        "options": ["option 1", "option 2", "option 3", "correct option"],
        "correct answer": "correct option"
    }

    for header in headers:
        note = notes.get(header, "")
        for i in range(questions_per_topic):
            prompt = (
                f"{base_prompt} \n\nTopic: '{header}'.\n\nNotes: {note}\n\n"
                f"Please use this JSON format for question {i + 1}: {json.dumps(json_template)}"
            )
            response = gemini_model.generate_content(prompt)
            try:
                question_data = json.loads(response.text)
                quiz_questions.append(question_data)
            except json.JSONDecodeError:
                print(f"Failed to parse the response for header '{header}' as JSON.")

    return json.dumps(quiz_questions, indent=2)
