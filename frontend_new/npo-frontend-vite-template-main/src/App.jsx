import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import FileUploadModal from './FileUploadModal';

function App() {
  return (
    <>
      <ChakraProvider>
        <FileUploadModal />
      </ChakraProvider>
    </>
  );
}

export default App;
