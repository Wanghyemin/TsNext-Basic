import { Box, Text, Flex, Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BlackButton, CustomInput } from "../../atoms";
import { FieldContent, FieldHeader } from "./FieldStyle";

export const FieldRadioGroup = (props: any) => {
  const { label, colSpan, radioItems } = props;
  const [value, setValue] = React.useState('1');
  const radioList = radioItems.map((radioItem: any, index: any) => (
    <Radio value={value}>{radioItem}</Radio>
  ));

  return (
    <>
      <Flex sx={FieldHeader}>
        <Text color={"#404152"}>{label}</Text>
      </Flex>
      <Flex sx={FieldContent}>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">{radioList}</Stack>
        </RadioGroup>
      </Flex>
    </>
  );
};
