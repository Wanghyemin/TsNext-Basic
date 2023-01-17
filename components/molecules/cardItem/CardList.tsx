import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CardListStyle } from "./CardStyle";

export const CardList = (props: any) => {
  const {children} = props

  return (
    <Flex sx={CardListStyle}>
      {children}
    </Flex>
  );
}