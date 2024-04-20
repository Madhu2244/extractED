import asyncio
from unittest.mock import AsyncMock, MagicMock
from grader_agent import GraderAgent, QuizParams, grader_proto, handle_grade_quiz
from ai_engine import UAgentResponse, UAgentResponseType

async def simulate_handle_generate_quiz(answers, responses):
    # Create a mock context
    ctx = MagicMock()
    ctx.send = AsyncMock()

    # Create a GraderAgent instance
    grader_agent = GraderAgent(name="TestGraderAgent", seed="test_grader_agent_seed")
    ctx.agent = grader_agent

    # Create a mock sender
    sender = "test_sender"

    # Create a QuizParams object with your own answers and responses
    req = QuizParams(answers=answers, responses=responses)

    # Call the handle_generate_quiz function
    await handle_grade_quiz(ctx, sender, req)

    # Print the logger info messages
    print("Logger Info:")
    for call in ctx.logger.info.call_args_list:
        print(call[0][0])

    # Print the message from the UAgentResponse
    message = ctx.send.call_args[0][1].message
    print(f"\nUAgent Message: {message}")

if __name__ == "__main__":
    # Example usage
    answers = ["A", "B", "C", "D", "A"]
    responses = ["A", "C", "C", "D", "B"]
    asyncio.run(simulate_handle_generate_quiz(answers, responses))