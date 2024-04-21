/* eslint-disable react/prop-types */
import React from 'react';
import { Box } from '@chakra-ui/react';

function Notes({ responseMessage }) {

  const outputNotes = (responseMessage) => {
    responseMessage = responseMessage['headers'];

    return (
      <div>
        {Object.entries(responseMessage).map(([header, subtexts], index) => (
          <div key={index}>
            <h2><strong>{header}</strong></h2>
            <ul>
              {subtexts.map((subtext, subIndex) => (
                <li key={subIndex}>{subtext}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: '#F8F8F8', minHeight: '100vh', paddingTop: '64px' }}> {/* Adjust padding top */}
      <Box
        maxW="8.5in" // Standard US letter paper width
        minH="11in" // Standard US letter paper height
        m="auto" // Center the box on the page horizontally
        p={8} // Internal padding
        boxShadow="md" // Adds shadow for depth, like a paper
        bg="white" // Background color of the paper
        borderRadius="md" // Optional: if you want rounded corners
      >
        <h1> Notes! </h1>
        {outputNotes(responseMessage)}
      </Box>
    </div>
  );
}

export default Notes;
