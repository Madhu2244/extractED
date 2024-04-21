/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';
import test from '../TestData/Test';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
  Flex,
} from '@chakra-ui/react'

function Quiz({ responseMessage, setStep }) {
  // State to keep track of selected answers
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [topicsToReview, setTopicsToReview] = useState({})
  const [showRightAnswers, setShowRightAnswers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [youtubeLinks, setYoutubeLinks] = useState([]);

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
    setIsLoading(true)
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
    setIsLoading(false)
  }

  const findYoutubeLinks = async () => {
    console.log(topicsToReview);
    for (const topic in topicsToReview) {
      try {
        const response = await fetch('http://127.0.0.1:5000/youtube', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ search: topic }),
        });
        
        const data = await response.json();
        if (data.message) {
          setYoutubeLinks(prevLinks => [...prevLinks, data.message]);
        }
      } catch (error) {
        console.error('Error fetching YouTube links:', error);
      }
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

  function extractVideoID(url) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    } else {
      return null;
    }
  }

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
          <Button onClick={() => {submitQuiz(); findYoutubeLinks();}}>
            Submit Quiz
          </Button>
          <Button onClick={() => setStep(0)}>
            Return to Main Screen
          </Button>
        </div>
        < br />
        < br />
        {isLoading && <Spinner />}

        {topicsToReview && Object.keys(topicsToReview).length > 0 && (
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>You missed questions from the following topics:</AlertTitle>
            <AlertDescription>
              <div>   
                {Object.entries(topicsToReview).map(([topic, count]) => (
                  <p key={topic}>{`${topic}`}</p>
                ))}
              </div>
            </AlertDescription>
          </Alert>
        )}

        <Flex direction="column" align="center" maxW="lg" m="auto" p={5}>
          {youtubeLinks.length > 0 && (
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Here are some YouTube videos that can assist with your learnings:
              </Text>
              {youtubeLinks.map((link, index) => {
                const videoID = extractVideoID(link);
                return (
                  <Box key={index} mb={4} p={3} bg="gray.100" borderRadius="md" width="full">
                    {videoID && (
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={`https://img.youtube.com/vi/${videoID}/0.jpg`} alt="Youtube Thumbnail" style={{ width: '100%', height: 'auto', display: 'block' }}/>
                        <Text display="block" mt={2}>{link}</Text>
                      </a>
                    )}
                  </Box>
                );
              })}
            </Box>
          )}
        </Flex>
      </Box>
    </div>
  );
}

export default Quiz;
