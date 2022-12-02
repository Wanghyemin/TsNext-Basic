import { Flex, Box, Text, CheckboxGroup, Stack, Checkbox, HStack } from "@chakra-ui/react";
import React from "react";
import { CardCheckListStyle } from "./CardStyle";

export const CardCheckList = (props: any) => {
  const {children} = props

  return (
    <Box height={'100%'}>
      <CheckboxGroup>
        <Stack sx={CardCheckListStyle}>
          {children}
        </Stack>
      </CheckboxGroup>
    </Box>
  );
};
