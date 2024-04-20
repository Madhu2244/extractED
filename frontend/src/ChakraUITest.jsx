import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';

function ChakraUITest() {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Input
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Enter text here"
    />
  );
}

export default ChakraUITest;
