from grader_agent import GraderAgent, QuizParams

def test_grader_agent():
    grader = GraderAgent(name="TestGraderAgent", seed="test_grader_agent_seed")

    answers = ["A", "B", "C"]
    responses = ["A", "C", "C"]

    quiz_params = QuizParams(answers=answers, responses=responses)
    graded_results = grader.grade_quiz(quiz_params)

    print(graded_results) 
    #

if __name__ == "__main__":
    test_grader_agent()