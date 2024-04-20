import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import GeneratedNotes from './GeneratedNotes';
import FileUploadModal from './FileUploadModal';
import NotesPage from './NotesPage';

function App() {

  const [responseMessage, setResponseMessage] = React.useState('');
  const [step, setStep] = React.useState(0)

  return (
    <>
      <ChakraProvider>
        {step == 0 && (
          <FileUploadModal 
            setResponseMessage={setResponseMessage}
            setStep={setStep}
          />
        )}

        {step == 1 && (
          <NotesPage />
        )}
        
        
        {/* <GeneratedNotes/> */}
      </ChakraProvider>
    </>
  );
}

export default App;
