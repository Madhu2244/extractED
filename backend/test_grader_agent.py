from grader_agent import GraderAgent, QuizParams

def test_grader_agent():
    grader = GraderAgent(name="TestGraderAgent", seed="test_grader_agent_seed")

    answers = ["A", "B", "C"]
    responses = ["A", "C", "C"]
    questions = ["1", "What helps you travel quickly", "3"]
    # notes= {
    #     "Airplanes": "Airplanes are incredible flying machines that have revolutionized transportation and connected people across the globe. They come in various sizes and designs, ranging from small private jets to massive commercial airliners capable of carrying hundreds of passengers. The development of airplanes has been a remarkable achievement in human history, showcasing our ability to innovate and push the boundaries of what is possible.", 
    #     "Physics": "Physics is a fundamental natural science that studies matter, energy, and their interactions, seeking to understand the underlying principles that govern the behavior of the universe. From the smallest subatomic particles to the vast expanse of the cosmos, physics explores a wide range of phenomena, including motion, forces, gravity, thermodynamics, electromagnetism, and quantum mechanics, providing a framework for understanding the world around us."
    #     }
    # Example test data that matches QuizParams definition
    test_notes = {
        "Aerial Flight Mechanics": ["Airplanes are winged vehicles.", "Airplanes can achieve lift due to their wing shapes."],
        "Awesome New Movie": ["The new movie is fantastic.", "It's about the law of attraction."],
        "Kepler's Laws of Planetary Motion": ["Planets orbit in ellipses.", "There's an equal area law."]
    }
    
    answers = ["A", "B", "C"]
    responses = ["A", "C", "C"]
    questions = ["1", "What helps you travel quickly", "3"]

    quiz_params = QuizParams(answers=answers, responses=responses, questions = questions, notes = test_notes)
    graded_results = grader.grade_quiz(quiz_params)

    print(graded_results) 
    #

if __name__ == "__main__":
    test_grader_agent()