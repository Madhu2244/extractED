import { useState } from 'react';
import {
  Box,
  VStack,
  Input,
  Button,
  Text,
  Spinner,
  useToast
} from '@chakra-ui/react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  // Simulate an API call to get a response
  const sendMessage = async (userMessage) => {
    setLoading(true);
    setMessages([...messages, { text: userMessage, sender: 'user' }]);
  
    // Create the payload to send to the server
    const payload = { chat: userMessage };
  
    try {
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setMessages(msgs => [...msgs, { text: data.message, sender: 'bot' }]);
  
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response from the server. " + error.message,
        status: "error",
        duration: 5000,
        isClosable: true
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <Box p={4} display="flex" flexDirection="column" height="67vh" bg="gray.100">
      <VStack flex={1} overflowY="auto" spacing={4} p={4}>
        {messages.map((msg, index) => (
          <Box key={index} alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'}>
            <Text fontSize="md" p={2} bg={msg.sender === 'user' ? '#9B93FF' : 'purple.200'} borderRadius="lg">
              {msg.text}
            </Text>
          </Box>
        ))}
        {isLoading && <Spinner />}
      </VStack>
      <Box padding={2} bg="white" borderTop="1px solid" borderColor="gray.200">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={event => {
            if (event.key === 'Enter') {
              handleSend();
            }
          }}
        />
        <Button onClick={handleSend} colorScheme="purple" mt={2}>
          Send
        </Button>
      </Box>
    </Box>
  );
  
}

export default Chatbot;
