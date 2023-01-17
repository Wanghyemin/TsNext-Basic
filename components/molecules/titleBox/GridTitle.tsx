import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { GridTitleStyle } from "./TitleStyle";

interface GridTitleProps {
  label?: string,
  children?: string
}

export const GridTitle = ({ label, children }: GridTitleProps) => {
  return (
    <Box sx={GridTitleStyle}>
      <Heading>{label}</Heading>
      <Box>
        <Button>{children}</Button>
      </Box>
    </Box>
  );
};