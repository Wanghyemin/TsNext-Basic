import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { CardTextStyle } from "./CardStyle";

export const CardText = (props: any) => {
  const {children} = props

  return (
    <Box>
      <Text sx={CardTextStyle}>{children}</Text>
    </Box>
  );
}