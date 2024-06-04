import { Box, Flex, Input, Button, IconButton, Select, Avatar, Spacer, HStack } from "@chakra-ui/react";
import { FaBell, FaPlus, FaQuestionCircle, FaFilter, FaSort, FaUpload, FaDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex bg="gray.50" p={4} alignItems="center">
      <Box fontWeight="bold" fontSize="xl">
        Project Name
        <Box fontSize="sm" color="gray.500">
          Category
        </Box>
      </Box>
      <Spacer />
      <HStack spacing={4}>
        <Input placeholder="Search" width="200px" />
        <Select placeholder="Category" width="150px">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </Select>
        <Button leftIcon={<FaFilter />}>Filter</Button>
        <Button leftIcon={<FaSort />}>Sort</Button>
        <Button leftIcon={<FaPlus />} colorScheme="blue">
          Add report
        </Button>
        <Button leftIcon={<FaUpload />}>Import</Button>
        <Button leftIcon={<FaDownload />}>Export</Button>
        <IconButton icon={<FaQuestionCircle />} />
        <IconButton icon={<FaBell />} />
        <Avatar size="sm" />
      </HStack>
    </Flex>
  );
};

export default Navbar;