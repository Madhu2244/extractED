/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';
import test from '../TestData/Test';

function Notes({ responseMessage }) {

  const outputNotes = (responseMessage) => {
    if (responseMessage === null || responseMessage === '') {
      responseMessage = test
    }
    const headers = responseMessage['headers'];

    return (
      <div>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{responseMessage['notes_title']}</h1>
        <br />
        {Object.entries(headers).map(([header, subtexts], index) => (
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
        id="notes-content"
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
