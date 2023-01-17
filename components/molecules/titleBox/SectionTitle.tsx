import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { SectionTitleStyle } from "./TitleStyle";

export const SectionTitle = (props: any) => {
  const { children, history } = props
  return (
    <Flex sx={SectionTitleStyle}>
      <Box textAlign={'left'}>
        <Heading>{children}</Heading>
      </Box>
      <Box>
        <Text>{history}</Text>
      </Box>
    </Flex>
  );
}