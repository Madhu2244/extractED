/* eslint-disable react/prop-types */
import React from 'react';
import FileUploadModal from './FileUploadModal';
import CardGrid from './CardGrid';
import { Stack, Spacer } from '@chakra-ui/react';

const MainPage = ({ setResponseMessage, setStep }) => {
  return (
    <div style={{display: "flex", flexDirection: 'column', }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Good Evening, Joey!</h1>
        </div>
        <Stack direction={['column']} spacing='10vh'>
            <FileUploadModal 
                setResponseMessage={setResponseMessage}
                setStep={setStep}
            />
            <div>
                <CardGrid />
            </div>
        </Stack>
        
    </div>
  );
}

export default MainPage;
