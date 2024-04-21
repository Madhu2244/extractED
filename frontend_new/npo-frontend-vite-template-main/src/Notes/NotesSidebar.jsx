/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import {
  Box, Flex, Button, Tag, Spacer
} from '@chakra-ui/react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import test from '../TestData/Test';
import Chatbot from './Chatbot.jsx';

function NotesSidebar({ setResponseMessage, responseMessage, setStep }) {

  const saveAsPDF = async () => {
    const element = document.getElementById('notes-content'); // Make sure the content you want to capture is wrapped with a div that has this ID
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps= pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('notes.pdf');
  };

  useEffect(() => {
    console.log(responseMessage === null || responseMessage === '')
    if (responseMessage === null || responseMessage === '') {
      setResponseMessage(test)
    }
  }, [])


  return (
    <Flex height="100vh" direction="column" width={"100%"}> {/* Changed to vertical layout */}
      <Box
        w="400px" /* Fixed width */
        bg="gray.200" /* Background color */
        p="4" /* Padding */
        flex="1" /* Takes up remaining space */
        overflowY="auto" /* Allows scrolling */
        borderLeft="1px" /* Visual separation */
        borderColor="gray.300"
      >
        <div>
          <Tag variant="solid" colorScheme="purple" my="4">
            <Flex align="center" style={{ width: '100vh', marginRight: '40px' }}>
              Subject: {responseMessage['subject tag']}
              {/* <Icon as={MdSettings} ml="2" /> */}
            </Flex>
          </Tag>
        </div>
        {/* Content section */}
        {/* <Image src={placeholderImage} alt="Placeholder image" /> */}
        <Chatbot />

        {/* <NotesTitleEditable /> */}
        <Spacer /> {/* Pushes footer down */}
      </Box>
      
      {/* Footer section */}
      <Flex
        p="4"
        direction="column"  // Changes flex direction to column for vertical stacking
        bg="gray.200"  // Matching the background of the sidebar
      >
        <Button onClick={() => saveAsPDF()} width="100%">
          Download Notes as PDF
        </Button>
        <Button onClick={() => setStep(2)} colorScheme="purple" width="100%" mt="3">
          Generate Quiz
        </Button>
      </Flex>
    </Flex>
  );
}

export default NotesSidebar;
