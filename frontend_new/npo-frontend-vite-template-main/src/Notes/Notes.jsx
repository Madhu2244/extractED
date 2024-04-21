import React from 'react';
import {
    Box
} from '@chakra-ui/react';

/* eslint-disable react/prop-types */
function Notes({ responseMessage }) {
  return (
    <div>
        <Box
        maxW="8.5in" // Standard US letter paper width
        minH="11in" // Standard US letter paper height
        m="auto" // Center the box on the page horizontally
        mt="16" // Top margin (using Chakra's spacing scale)
        p={8} // Internal padding
        boxShadow="md" // Adds shadow for depth, like a paper
        bg="white" // Background color of the paper
        borderRadius="md" // Optional: if you want rounded corners
      >
        {responseMessage}
      </Box>
    </div>
  );
}

export default Notes;
