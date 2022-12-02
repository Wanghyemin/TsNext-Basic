import { Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";
import React from "react";
import { CardBoxStyle } from "./CardStyle";

export const CardBox = (props: any) => {
  const { children } = props
  return (
    <Flex sx={CardBoxStyle}>
      <Checkbox></Checkbox>
      {children}
    </Flex>
  );
}
