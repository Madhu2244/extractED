/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';

function Notes({ responseMessage }) {

  const outputNotes = (responseMessage) => {
    responseMessage = responseMessage['headers'];

    return (
      <div>
        {Object.entries(responseMessage).map(([header, subtexts], index) => (
          <div key={index}>
            <h2 fontSize="18px"><strong>{header}</strong></h2>
            <ul>
              {subtexts.map((subtext, subIndex) => (
                <li fontSize="16px" key={subIndex}>{subtext}</li>
              ))}
            </ul>
            <br />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: '#F8F8F8', minHeight: '100vh', paddingTop: '64px' }}> {/* Adjust padding top */}
      <Box
        maxW="7in" // Standard US letter paper width
        minH="11in" // Standard US letter paper height
        m="auto" // Center the box on the page horizontally
        p="16" // Increased internal padding to 16 from 8 for more inward effect
        boxShadow="md" // Adds shadow for depth, like a paper
        bg="white" // Background color of the paper
        borderRadius="md" // Optional: if you want rounded corners
      >
        {outputNotes(responseMessage)}
      </Box>
    </div>
  );
}

export default Notes;
