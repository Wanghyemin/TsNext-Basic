import { Input, Box, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { BlackButton } from "../../atoms";
import { FieldContent, FieldHeader } from "./FieldStyle";

export const FieldBoxHead = (props: any) => {
  const { label , children } = props
  return (
    <Flex marginBottom={'12px'} height={'30px'}>
      <Flex width={'50%'}>
        <Text>{children}</Text>
      </Flex>
      <Flex width={'50%'} justifyContent={'flex-end'}>
        <Box>
          <Button>{label}</Button>
        </Box>
      </Flex>
    </Flex>
  );
} 