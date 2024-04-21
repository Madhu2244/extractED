import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import FileUploadModal from './MainPage/FileUploadModal';
import NotesPage from './Notes/NotesPage';

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
          <NotesPage 
            responseMessage={responseMessage}
          />
        )}
        
        
        {/* <GeneratedNotes/> */}
      </ChakraProvider>
    </>
  );
}

export default App;
