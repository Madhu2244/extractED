import React from 'react';
import {
  Box, Flex, Button, Image, Tag, Icon
} from '@chakra-ui/react';
import placeholderImage from './placeholder-article.png';
import NotesTitleEditable from './NotesTitleEditable';
import { MdSettings } from "react-icons/md"; // Using MdSettings icon

function NotesSidebar({ setStep }) {
  return (
    <Flex height="100vh"> {/* Full viewport height and flexible display */}
      <Box
        w="250px" /* Fixed width */
        bg="gray.200" /* Background color */
        p="4" /* Padding */
        height="100vh" /* Full viewport height */
        overflowY="auto" /* Allows scrolling */
        borderLeft="1px" /* Visual separation */
        borderColor="gray.300"
      >
        <Box>
          <Image src={placeholderImage} alt="Placeholder image"></Image>
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
          <NotesTitleEditable />
        </Box>
        <Flex justifyContent="space-between" mt="4">
          <Button onClick={() => setStep(1)} width="calc(50% - 2px)">
            Save Note
          </Button>
          <Button onClick={() => setStep(2)} colorScheme="purple" width="calc(50% - 2px)">
            Generate Quiz
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default NotesSidebar;
