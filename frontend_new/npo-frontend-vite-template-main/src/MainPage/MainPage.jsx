/* eslint-disable react/prop-types */
import React from 'react';
import FileUploadModal from './FileUploadModal';
import CardGrid from './CardGrid';
import { Stack, Avatar, Wrap, WrapItem } from '@chakra-ui/react';
import logo from './logo.png';

const MainPage = ({ setResponseMessage, setStep }) => {
  return (
    <div style={{ display: "flex", flexDirection: 'column', position: 'relative' }}>

      <div style={{ display: "flex", alignItems: 'center'}}>
        <img src={logo} alt="logo" style={{ width: '100px' }} />
        <Wrap style={{ marginLeft: 'auto', padding: '8px'}}>
          <WrapItem>
            <Avatar size='sm' name='Joey Smith' color='white' backgroundColor='brown' />
          </WrapItem>
        </Wrap>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
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
