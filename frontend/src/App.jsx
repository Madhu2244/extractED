import React from 'react';
import UploadFile from './UploadFile';
import ChakraUITest from './ChakraUITest';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <>
      <ChakraProvider>
        <ChakraUITest />
        <UploadFile />
      </ChakraProvider>
    </>
  );
}

export default App;
