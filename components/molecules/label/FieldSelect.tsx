import { Button, Flex, Select, Text } from "@chakra-ui/react";
import { CustomInput } from "@components/atoms/input";
import React from "react";
import { FieldHeader, FieldContent, FieldSelectStyle } from "./FieldStyle";

interface FieldSelectProps {
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  selectItems?: any;
  value?: any;
  buttonLable?: string;
  textLable?: string;
  inputLable?: string;
}

export const FieldSelect = ({
  label,
  placeholder,
  isDisabled,
  selectItems,
  value,
  buttonLable,
  textLable,
  inputLable,
}: FieldSelectProps) => {
  const selectList = selectItems.map((selectItem: any, index: any) => (
    <option value={selectItem}>{selectItem}</option>
  ));

  return (
    <>
      <Flex sx={FieldHeader}>
        <Text color={"#404152"}>{label}</Text>
      </Flex>
      <Flex sx={FieldContent}>
        <Select sx={FieldSelectStyle}>{selectList}</Select>
        {buttonLable && (
          <Button height={"30px"} colorScheme={"btn-gray"}>
            {buttonLable}
          </Button>
        )}
        {textLable && <Text>{textLable}</Text>}
        {inputLable && <CustomInput value={inputLable} />}
      </Flex>
    </>
  );
};
