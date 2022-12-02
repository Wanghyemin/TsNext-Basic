import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { CardTitleStyle } from "./CardStyle";

export const CardTitle = (props: any) => {
  const {children} = props

  return (
    <Box>
      <Text sx={CardTitleStyle}>[{children}]</Text>
    </Box>
  );
}