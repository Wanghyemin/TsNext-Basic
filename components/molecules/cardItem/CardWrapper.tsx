import { Box, Button, chakra, Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";
import React from "react";
import { CardWrapperStyle, CardWrapTitle } from "./CardStyle";

export const CardWrapper = (props: any) => {
  const { children } = props
  return (
    <Flex sx={CardWrapperStyle}>
      <Box sx={CardWrapTitle}>
        설치장치
        <Button colorScheme={'btn-black'}>장치추가</Button>
      </Box>
      {children}
    </Flex>
  );
}
