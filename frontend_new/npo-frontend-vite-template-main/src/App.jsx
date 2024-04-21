import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import FileUploadModal from './MainPage/FileUploadModal';
import NotesPage from './Notes/NotesPage';
import Quiz from './Quiz/Quiz';
import MainPage from './MainPage/MainPage';
import './App.css';

function App() {

  const [responseMessage, setResponseMessage] = React.useState('');
  const [step, setStep] = React.useState(0)

  return (
    <>
      <ChakraProvider>
        {step == 0 && (
          <MainPage 
            setResponseMessage={setResponseMessage}
            setStep={setStep}
          />
        )}

        {step == 1 && (
          <NotesPage 
            responseMessage={responseMessage}
            setStep={setStep}
          />
        )}

        {step == 2 && (
          <Quiz
            responseMessage={responseMessage}
            setStep={setStep}
          />
        )}

      </ChakraProvider>
    </>
  );
}

export default App;
