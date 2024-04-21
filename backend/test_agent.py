import asyncio
from unittest.mock import AsyncMock, MagicMock
from grader_agent import GraderAgent, QuizParams, grader_proto, handle_grade_quiz
from ai_engine import UAgentResponse, UAgentResponseType

async def simulate_handle_generate_quiz(answers, responses, questions,notes):
    # Create a mock context
    ctx = MagicMock()
    ctx.send = AsyncMock()

    # Create a GraderAgent instance
    grader_agent = GraderAgent(name="TestGraderAgent", seed="test_grader_agent_seed")
    ctx.agent = grader_agent

    # Create a mock sender
    sender = "test_sender"

    # Create a QuizParams object with your own answers and responses
    req = QuizParams(answers=answers, responses=responses, questions=questions, notes = notes)

    # Call the handle_generate_quiz function
    await handle_grade_quiz(ctx, sender, req)

    # Print the logger info messages
    print("Logger Info:")
    for call in ctx.logger.info.call_args_list:
        print(call[0][0])

    # Print the message from the UAgentResponse
    message = ctx.send.call_args[0][1].message
    print(f"\nUAgent Message: {message}")

    return message


if __name__ == "__main__":
    # Example usage
    answers = ["A", "B", "C"]
    responses = ["A", "C", "C"]
    questions = ["1", "What helps you travel quickly", "3"]
    notes= {
        "Airplanes": "Airplanes are incredible flying machines that have revolutionized transportation and connected people across the globe. They come in various sizes and designs, ranging from small private jets to massive commercial airliners capable of carrying hundreds of passengers. The development of airplanes has been a remarkable achievement in human history, showcasing our ability to innovate and push the boundaries of what is possible.", 
        "Physics": "Physics is a fundamental natural science that studies matter, energy, and their interactions, seeking to understand the underlying principles that govern the behavior of the universe. From the smallest subatomic particles to the vast expanse of the cosmos, physics explores a wide range of phenomena, including motion, forces, gravity, thermodynamics, electromagnetism, and quantum mechanics, providing a framework for understanding the world around us."
        }

    
    asyncio.run(simulate_handle_generate_quiz(answers, responses, questions, notes))