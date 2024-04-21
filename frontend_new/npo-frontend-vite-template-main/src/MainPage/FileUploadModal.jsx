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
  Button,
  Input,
  Flex,
} from '@chakra-ui/react';
import { IoMdCloudUpload } from "react-icons/io";

function FileUploadModal({ setResponseMessage, setStep }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Upload state management from UploadFile component
  const [file, setFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState('')

  const handleChange = (event) => setValue(event.target.value)

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
        const data = await response.json();
        setResponseMessage(data); // Update response message
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
      <Flex justifyContent="center" width="100%">
        <Flex width="70%" justifyContent="space-between">
        <Button colorScheme='purple' width="25%" mr={4} onClick={onOpen}>
  Import Slides <span style={{ marginLeft: '5px' }}><IoMdCloudUpload /></span>
</Button>
          <Input value={value} onChange={handleChange} placeholder='Search for your notes' size='md' width="75%" />
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Lecture Slides, Video Recordings, or Other Class Resources</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* File input within ModalBody */}
            <input type="file" onChange={handleFileChange} />
            {loading && <p>Please wait, uploading...</p>}
            <Button onClick={handleFileChange} marginTop="5px">Add Additional Files</Button>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} style={{ marginRight: '10px' }}>Cancel</Button>
            <Button colorScheme='purple' mr={3} onClick={handleUpload} disabled={loading}>
  {loading ? 'Uploading...' : 'Upload File'}
  <span style={{ marginLeft: '5px' }}><IoMdCloudUpload /></span>
</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FileUploadModal;
