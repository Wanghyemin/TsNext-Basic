import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

export const CardButtonList = () => {
  return (
    <Flex flexDirection={'column'} paddingTop={'10px'}>
      <Button colorScheme={'btn-black'}>그래프</Button>
      <Button colorScheme={'btn-gray'} marginTop={'15px'}>설정</Button>
    </Flex>
  );
}