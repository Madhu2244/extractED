import React from 'react';
import { MdSettings } from 'react-icons/md'; // Import MdSettings icon
import {
  Tag,
  TagLabel,
  TagRightIcon,
  HStack
} from '@chakra-ui/react';

function TagFeature() {
  return (
    <HStack spacing={4}>
      {['sm', 'md', 'lg'].map((size) => (
        <Tag size={size} key={size} marginTop="2px" variant='outline' colorScheme='purple'>
          <TagLabel>Blue</TagLabel>
          <TagRightIcon as={MdSettings} />
        </Tag>
      ))}
    </HStack>
  );
}

export default TagFeature;
