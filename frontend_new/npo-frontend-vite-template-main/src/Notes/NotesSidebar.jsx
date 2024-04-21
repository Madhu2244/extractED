import React from 'react';
import {
  Box, Flex, Button, Image, Tag, Icon, Spacer
} from '@chakra-ui/react';
import placeholderImage from './placeholder-article.png';
import NotesTitleEditable from './NotesTitleEditable';
import { MdSettings } from "react-icons/md"; // Using MdSettings icon

function NotesSidebar({ setStep }) {
  return (
    <Flex height="100vh" direction="column"> {/* Changed to vertical layout */}
      <Box
        w="275px" /* Fixed width */
        bg="gray.200" /* Background color */
        p="4" /* Padding */
        flex="1" /* Takes up remaining space */
        overflowY="auto" /* Allows scrolling */
        borderLeft="1px" /* Visual separation */
        borderColor="gray.300"
      >
<<<<<<< Updated upstream
        {/* Content section */}
        <Image src={placeholderImage} alt="Placeholder image" />

        <div>
          <Tag variant="solid" colorScheme="purple" my="4">
            <Flex align="center" style={{ marginRight: '40px' }}>
=======
        <Box>
          <Image src={placeholderImage} alt="Placeholder image"></Image>
          <Tag variant="solid" colorScheme="purple" my="4" marginRight = "2">
            <Flex align="center">
>>>>>>> Stashed changes
              Subject Tag
              <Icon as={MdSettings} ml="2" />
            </Flex>
          </Tag>
          <Tag variant="solid" colorScheme="purple" my="4">
            <Flex align="center">
              Work Tag
              <Icon as={MdSettings} ml="2" />
            </Flex>
          </Tag>
        </div>
        <NotesTitleEditable />
        <Spacer /> {/* Pushes footer down */}
      </Box>
      
      {/* Footer section */}
      <Flex
        p="4"
        direction="column"  // Changes flex direction to column for vertical stacking
        bg="gray.200"  // Matching the background of the sidebar
      >
        <Button onClick={() => setStep(1)} width="100%">
          Save Note
        </Button>
        <Button onClick={() => setStep(2)} colorScheme="purple" width="100%" mt="3">
          Generate Quiz
        </Button>
      </Flex>
    </Flex>
  );
}

export default NotesSidebar;
