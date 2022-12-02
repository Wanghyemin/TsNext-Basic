import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { CustomInput } from "../../atoms";
import { FieldContent, FieldHeader, FieldinnerButton } from "./FieldStyle";

interface FieldInputButtonProps {
  label?: string;
  placeholder?: string;
  buttonLabel?: string;
  isDisabled?: boolean;
}

export const FieldInputButton = ({
  label,
  placeholder,
  buttonLabel,
  isDisabled,
}: FieldInputButtonProps) => {
  return (
    <>
      <Flex sx={FieldHeader}>
        <Text color={"#404152"}>{label}</Text>
      </Flex>
      <Flex sx={FieldContent}>
        <Button sx={FieldinnerButton} colorScheme={"btn-gray"}>
          {buttonLabel}
        </Button>
        <CustomInput type={"text"} placeholder={placeholder} />
      </Flex>
    </>
  );
};
