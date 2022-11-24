import Link from "next/link";
import { Tabs, TabList, Tab, Box, ChakraProvider } from "@chakra-ui/react";

const NavBar : React.FC = () => {
  return (
    <>
      <Box w="100%" h="30px" bgGradient="linear(to-t, white, yellow.100)" textAlign={"right"} textColor={"pink.300"}>
      </Box>

      <ChakraProvider >
        <Tabs w={"80%"} align="end" variant="soft-rounded" colorScheme="yellow">
          <TabList>
            <Tab><Link href ="/">홈</Link></Tab>
            <Tab><Link href ="/board/list">게시판</Link></Tab>
            <Tab><Link href ="/board/write">글쓰기</Link></Tab>
          </TabList>
        </Tabs>
      </ChakraProvider>
    </>
  );
}
export default NavBar