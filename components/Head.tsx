import Link from "next/link";
import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";

export default function Head() {
  return (
    <>
        <Box w="100%" h="20px" bgGradient="linear(to-t, pink.100, white)"></Box>
        <Text
            bgGradient="linear(to-t, yellow , pink)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            textAlign={"center"}
            >
        Welcome to Chakra UI
        </Text>
    </>
  );
}
