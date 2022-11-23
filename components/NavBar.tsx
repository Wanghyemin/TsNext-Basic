import Link from "next/link";
import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <>
      <Box w="100%" h="30px" bgGradient="linear(to-t, white, yellow.200)" textAlign={"right"} textColor={"pink.300"}>
        <Link href="/"> 홈 </Link>
        <Link href="/board/list"> 공지사항 </Link>
        <Link href="/board/write"> 글작성 </Link>
      </Box>
    </>
  );
}
