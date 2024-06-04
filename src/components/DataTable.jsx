import { Box, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Button, HStack, Text } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DataTable = () => {
  const data = Array(10).fill({
    item: "Lorem dolore",
    value: "9,000",
    data1: "Data series",
    data2: "DD/MM/YY",
    status: "Status",
  });

  return (
    <Box p={4} flex="1">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>
              <Checkbox />
            </Th>
            <Th>ITEM</Th>
            <Th>VALUE ($)</Th>
            <Th>DATA</Th>
            <Th>DATA</Th>
            <Th>STATUS</Th>
            <Th>ACTION</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>
                <Checkbox />
              </Td>
              <Td>{row.item}</Td>
              <Td>{row.value}</Td>
              <Td>{row.data1}</Td>
              <Td>{row.data2}</Td>
              <Td>
                <Button size="sm">{row.status}</Button>
              </Td>
              <Td>
                <HStack spacing={2}>
                  <IconButton icon={<FaEdit />} size="sm" />
                  <IconButton icon={<FaTrash />} size="sm" />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <HStack justifyContent="space-between" mt={4}>
        <Text>106 results</Text>
        <HStack>
          <Button size="sm">{"<"}</Button>
          <Button size="sm">1</Button>
          <Button size="sm">2</Button>
          <Button size="sm">3</Button>
          <Button size="sm">4</Button>
          <Button size="sm">...</Button>
          <Button size="sm">10</Button>
          <Button size="sm">{">"}</Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default DataTable;