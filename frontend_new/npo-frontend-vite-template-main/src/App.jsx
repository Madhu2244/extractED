import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import FileUploadModal from './FileUploadModal';
import GeneratedNotes from './GeneratedNotes';


function App() {
  return (
    <>
      <ChakraProvider>
        {/* <FileUploadModal /> */}
        <GeneratedNotes/>
      </ChakraProvider>
    </>
  );
}

export default App;
