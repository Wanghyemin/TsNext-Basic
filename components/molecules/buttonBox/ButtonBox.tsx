import { Flex, HTMLChakraProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ButtonBoxProps extends HTMLChakraProps<"div"> {
  children: ReactNode;
}

const ButtonBox = ({
  children,
  ...props
}: ButtonBoxProps) => {
  return (
    <Flex minWidth={"100%"} justifyContent="center" {...props}>
      {children}
    </Flex>
  );
};

export default ButtonBox;
