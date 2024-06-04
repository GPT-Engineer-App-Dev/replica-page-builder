import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable";

const Index = () => {
  return (
    <Flex height="100vh" direction="column">
      <Navbar />
      <Flex flex="1">
        <Sidebar />
        <DataTable />
      </Flex>
    </Flex>
  );
};

export default Index;