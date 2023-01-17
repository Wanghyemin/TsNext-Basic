import { Box, Text, Flex } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { CustomInput } from "../../atoms";
import { FieldContent, FieldHeader } from "./FieldStyle";

interface FieldInputProps {
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  value?: string;
}

export const FieldInput = ({ label, placeholder, isDisabled, value }: FieldInputProps) => {
  return (
    <>
      <Flex sx={FieldHeader}>
        <Text color={"#404152"}>{label}</Text>
      </Flex>
      <Flex sx={FieldContent}>
        <CustomInput type={"text"} placeholder={placeholder} />
      </Flex>
    </>
  );
};