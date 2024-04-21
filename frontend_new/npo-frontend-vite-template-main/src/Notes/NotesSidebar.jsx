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
        {/* Content section */}
        <Image src={placeholderImage} alt="Placeholder image" />

        <div style={{ padding: '8px' }}>
          <Tag variant="solid" colorScheme="purple" my="4">
            <Flex align="center">
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
        borderTop="1px"
        borderColor="gray.300"
        justifyContent="space-between"
        bg="gray.200" // Matching the background of the sidebar
      >
        <Button onClick={() => setStep(1)} width="calc(50% - 2px)">
          Save Note
        </Button>
        <Button onClick={() => setStep(2)} colorScheme="purple" width="calc(50% - 2px)">
          Generate Quiz
        </Button>
      </Flex>
    </Flex>
  );
}

export default NotesSidebar;
