/* eslint-disable react/prop-types */
import { Flex, Link, Box, Button, SimpleGrid, Text } from '@chakra-ui/react'

const CardGrid = ({ setStep }) => {
    
    const CardComponent = (title) => {
        return (
            <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                >
                <Box bg="#9B93FF" p={8}>
                    <Text fontSize="xl" fontWeight="semibold" color="white">
                        {title}
                    </Text>
                </Box>
                <Flex justifyContent="space-between" alignItems="center" p={5} bg="white">
                    <Link href="#" fontWeight="bold" onClick={() => setStep(1)}>
                        Review Notes
                    </Link>
                    <Button colorScheme="purple" onClick={() => setStep(2)}>Take Quiz</Button>
                </Flex>
            </Box>
        )
    }

    return (
        <>
            <Box width="100%">
                <Box width="40%" textAlign="center">
                    <h2 style={{ fontSize: '20px' }}>Recent Notes</h2>
                    <br />
                </Box>
                <Box display="flex" justifyContent="center" width="100%">
                    <SimpleGrid width="70%" spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                        {CardComponent("Minds and Machines")}
                        {CardComponent("Aviation Introduction")}
                        {CardComponent("Under the hood: Python")}
                        {CardComponent("US History: Colonization")}
                        {CardComponent("Programming: Different Loops")}
                        {CardComponent("Math: Differential Equations")}
                    </SimpleGrid>
                </Box>
                <br />
            </Box>
        </>

    );
}
export default CardGrid;
