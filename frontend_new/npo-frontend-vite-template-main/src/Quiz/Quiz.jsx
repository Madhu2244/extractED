/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';
import test from '../TestData/Test';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

function Quiz({ responseMessage, setStep }) {
  // State to keep track of selected answers
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [topicsToReview, setTopicsToReview] = useState({})
  const [showRightAnswers, setShowRightAnswers] = useState(false);

  // Handler for clicking an answer option
  const handleAnswerClick = (questionIndex, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex
    });
  };


  function parseAndCount(data) {
    // Extract the list part from the string
    const listStart = data.indexOf('(') + 1;
    const listEnd = data.lastIndexOf(')');

    const inputString = data.substring(listStart, listEnd);
    // Remove the surrounding brackets
    const trimmedString = inputString.slice(1, -1);

    // More robust splitting by detecting the pattern ", " outside of quotes
    const items = trimmedString.split(/,\s*(?=(?:(?:[^"']*["']){2})*[^"']*$)/);

    // Clean up the items (remove any leading/trailing quotes)
    const cleanedItems = items.map(item => item.replace(/^['"]|['"]$/g, ''));

    // Count the occurrences of each item
    const counts = {};
    cleanedItems.forEach(item => {
        if (counts[item]) {
            counts[item]++;
        } else {
            counts[item] = 1;
        }
    });

    return counts;
  }

  const submitQuiz = async () => {
    // Prepare the payload by adding selected answers to the quiz questions
    responseMessage.quiz.map((question, index) => ({
      ...question,
      selectedAnswer: selectedAnswers[index] !== undefined
        ? question.options[selectedAnswers[index]]
        : null
    }))

    const payload = {
      quiz: responseMessage
    };
  
    console.log(payload); // Check what you are sending
  
    try {
      const response = await fetch('http://127.0.0.1:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indicating that we are sending JSON
        },
        body: JSON.stringify(payload), // Convert the JavaScript object to a JSON string
      });
  
      let data = await response.json(); // Assuming the server sends back JSON
      data = data['message'];
      // console.log(data)
      setShowRightAnswers(true)
      setTopicsToReview(parseAndCount(data))
    } catch (error) {
      console.error('Error uploading quiz:', error);
    }
  }

  // Render the quiz based on the responseMessage
  const outputQuiz = (responseMessage) => {
    if (responseMessage === null || responseMessage === '') {
      responseMessage = test
    }
    const quizData = responseMessage['quiz'];

    return (
      <div>
        {quizData.map((quizItem, index) => (
          <div key={index}>
            <h3>{quizItem.question}</h3>
            <ul>
            {showRightAnswers && selectedAnswers[index] !== quizItem.options.findIndex(opt => opt === quizItem['correct answer']) && (
              <div>
                <h1 style={{ color: 'red' }}>Incorrect: the answer is: {quizItem['correct answer']}</h1>
              </div>
            )}
            {quizItem.options.map((option, optionIndex) => {
              const letter = String.fromCharCode(65 + optionIndex);
              return (
                <Box key={optionIndex} mt={2} display="flex" alignItems="center">
                    <Button
                      onClick={() => handleAnswerClick(index, optionIndex)}
                      borderRadius="full" // Circular shape
                      size="sm" // Small button size
                      colorScheme={selectedAnswers[index] === optionIndex ? 'blue' : 'gray'}
                      mr={4} // Right margin for spacing between button and text
                    >
                      {letter} {/* Displaying the option number */}
                    </Button>
                    <Text display="inline">{option}</Text> {/* Display the option text */}
                    <br />
                  </Box>
              )})}
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
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Select the correct answer for each question</h1>
        <br />
        {outputQuiz(responseMessage)}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={submitQuiz}>
            Submit Quiz
          </Button>
          <Button onClick={() => setStep(0)}>
            Return to Main Screen
          </Button>
        </div>
        < br />
        < br />
        

        {topicsToReview && Object.keys(topicsToReview).length > 0 && (
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Make sure to review the following topics!</AlertTitle>
            <AlertDescription>
              <div>   
                {Object.entries(topicsToReview).map(([topic, count]) => (
                  <p key={topic}>{`${topic}: ${count} question(s) missed`}</p>
                ))}
              </div>
            </AlertDescription>
          </Alert>
          
        )}
      </Box>
    </div>
  );
}

export default Quiz;
