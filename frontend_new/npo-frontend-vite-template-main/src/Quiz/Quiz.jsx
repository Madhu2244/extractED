/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';

function Quiz({ responseMessage }) {
  // State to keep track of selected answers
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Handler for clicking an answer option
  const handleAnswerClick = (questionIndex, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex
    });
  };

  const submitQuiz = async () => {
    responseMessage.quiz.forEach((question, index) => {
      if (selectedAnswers[index] !== undefined) {
        // Add the selected answer to the quiz question
        question.selectedAnswer = question.options[selectedAnswers[index]];
      }
    });
    console.log(responseMessage);
    const formData = new FormData();
    formData.append('quiz', responseMessage);

    try {
      await fetch('http://127.0.0.1:5000/submit', {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      console.error('Error uploading quiz:', error);
    }
  }

  // Render the quiz based on the responseMessage
  const outputQuiz = (responseMessage) => {
    const quizData = responseMessage['quiz'];

    return (
      <div>
        {quizData.map((quizItem, index) => (
          <div key={index}>
            <h3>{quizItem.question}</h3>
            <ul>
            {quizItem.options.map((option, optionIndex) => (
              <Box key={optionIndex} mt={2} display="flex" alignItems="center">
                  <Button
                    onClick={() => handleAnswerClick(index, optionIndex)}
                    borderRadius="full" // Circular shape
                    size="sm" // Small button size
                    colorScheme={selectedAnswers[index] === optionIndex ? 'blue' : 'gray'}
                    mr={4} // Right margin for spacing between button and text
                  >
                    {optionIndex + 1} {/* Displaying the option number */}
                  </Button>
                  <Text display="inline">{option}</Text> {/* Display the option text */}
                  <br />
                </Box>
              ))}
            </ul>
            <br />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Box
        maxW="8.5in"
        minH="11in"
        m="auto"
        mt="16"
        p={8}
        boxShadow="md"
        bg="white"
        borderRadius="md"
      >
        <h1>Quiz!</h1>
        {outputQuiz(responseMessage)}
        <Button onClick={submitQuiz}>
          Submit Quiz
        </Button>
      </Box>
    </div>
  );
}

export default Quiz;
