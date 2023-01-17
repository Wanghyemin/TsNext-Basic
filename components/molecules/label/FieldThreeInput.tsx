import { Box, Text, Flex } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { CustomInput } from "../../atoms";
import { FieldContent, FieldHeader } from "./FieldStyle";

interface FieldThreeInputProps {
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  unit?: string;
  Path?: string;
  Port?: string;
}

export const FieldThreeInput = ({
  label,
  placeholder,
  isDisabled,
  unit,
  Path,
  Port,
}: FieldThreeInputProps) => {
  return (
    <>
      <Flex sx={FieldHeader}>
        <Text color={"#404152"}>{label}</Text>
      </Flex>
      <Flex sx={FieldContent}>
        <Flex width={'100%'}>
          <CustomInput type={"text"} placeholder={placeholder} />
          <Text padding={'10px 0 0 5px'}>{unit}</Text>
        </Flex>
        <Flex width={'100%'}>
          <Text margin={'0 10px'}>{Path}</Text>
          <CustomInput type={"text"} placeholder={placeholder} />
          <Text padding={'10px 0 0 5px'}>{unit}</Text>
        </Flex>
        <Flex width={'100%'}>
          <Text margin={'0 10px'}>{Port}</Text>
          <CustomInput type={"text"} placeholder={placeholder} />
          <Text padding={'10px 0 0 5px'}>{unit}</Text>
        </Flex>
      </Flex>
    </>
  );
};
