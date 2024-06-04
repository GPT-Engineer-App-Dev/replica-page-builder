import { Box, VStack, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box bg="gray.50" p={4} width="200px" height="100vh">
      <VStack align="start" spacing={4}>
        <Text fontWeight="bold" fontSize="xl">
          Project Name
        </Text>
        <Text fontSize="sm" color="gray.500">
          Category
        </Text>
        <Text>Call Tool</Text>
        <Text>Invoice Tool</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;