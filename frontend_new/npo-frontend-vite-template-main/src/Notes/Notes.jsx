import React from 'react';
import { Box } from '@chakra-ui/react';

function Notes({ responseMessage }) {

  const outputNotes = (responseMessage) => {
    responseMessage = responseMessage['headers'];

    return (
      <div>
        {Object.entries(responseMessage).map(([header, subtexts], index) => (
          <div key={index}>
            <h2 contentEditable={true} style={{ fontSize: '18px' }}><strong>{header}</strong></h2>
            <ul>
              {subtexts.map((subtext, subIndex) => (
                <li contentEditable={true} style={{ fontSize: '16px' }} key={subIndex}>{subtext}</li>
              ))}
            </ul>
            <br />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: '#F8F8F8', minHeight: '100vh', paddingTop: '64px' }}>
      <Box
        maxW="7in"
        minH="11in"
        m="auto"
        p="16"
        boxShadow="md"
        bg="white"
        borderRadius="md"
      >
        {outputNotes(responseMessage)}
      </Box>
    </div>
  );
}

export default Notes;
