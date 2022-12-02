import {
  Box,
  Text,
  Flex,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import React from "react";
import { BlackButton, CustomInput } from "../../atoms";
import { FieldContent, FieldHeader } from "./FieldStyle";


export const FieldCheckBoxGroup = (props: any) => {
  const { options, label } = props;
  const optionList = options.map((option: any, index: any) => (
    <Flex width={'250px'}>
      <Text minW={"120px"} color={"#404152"}>
        {option}
      </Text>
      <Checkbox>동의합니다.</Checkbox>
    </Flex>
  ));

  return (
    <>
      <Flex sx={FieldHeader}>
        <Text color={"#404152"}>{label}</Text>
      </Flex>
      <Flex sx={FieldContent}>{optionList}</Flex>
    </>
  );
};
