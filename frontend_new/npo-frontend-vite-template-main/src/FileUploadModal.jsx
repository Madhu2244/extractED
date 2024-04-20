import React from 'react';
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
import UploadFile from './UploadFile';
import { IoMdCloudUpload } from "react-icons/io";

function FileUploadModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
        <Button colorScheme='purple' mr={3} onClick={onOpen}>Import Lecture Slides</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Upload Lecture Slides in PPTX Format</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <UploadFile/>
            </ModalBody>

            <ModalFooter>
                <Button variant='ghost'>Secondary Action</Button>
                <Button colorScheme='purple' mr={3} onClick={onClose}>Upload File</Button>
                <IoMdCloudUpload />
            </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  );
}

export default FileUploadModal;
