/* eslint-disable react/prop-types */
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
} from '@chakra-ui/react';
import { IoMdCloudUpload } from "react-icons/io";

function FileUploadModal({ setResponseMessage, setStep }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Upload state management from UploadFile component
  const [file, setFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setResponseMessage(''); // Clear previous message when a new file is selected
  };

  const handleUpload = async () => {
    if (file) {
      setLoading(true); // Start loading
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://127.0.0.1:5000/upload', {
          method: 'POST',
          body: formData,
        });
        const data = await response.text();
        setResponseMessage('Upload successful: ' + data);
        console.log('Response:', data); // Log the server response
      } catch (error) {
        console.error('Error uploading file:', error);
        setResponseMessage('Upload failed!');
      } finally {
        setLoading(false);
        onClose(); // Close the modal after upload
        setStep(1);
      }
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <>
      <Button colorScheme='purple' mr={3} onClick={onOpen}>Import Lecture Slides</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Lecture Slides in PPTX Format</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* File input within ModalBody */}
            <input type="file" accept=".pptx" onChange={handleFileChange} />
            {loading && <p>Please wait, uploading...</p>}
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost'>Secondary Action</Button>
            <Button colorScheme='purple' mr={3} onClick={handleUpload} disabled={loading}>
              {loading ? 'Uploading...' : 'Upload File'}
              <IoMdCloudUpload />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FileUploadModal;
