import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const SectionTitle = (props: any) => {
  const { children, history } = props
  return (
    <Flex justifyContent={'space-between'}>
      <Box textAlign={'left'}>
        <Text fontSize={'18px'} color={'#404152'} fontWeight={'700'} letterSpacing={'-2%'} lineHeight={'26px'}>{children}</Text>
      </Box>
      <Box textAlign={'right'}>
        <Text fontSize={'16px'} color={'#404152'} fontWeight={'700'} letterSpacing={'-2%'} lineHeight={'26px'}>{history}</Text>
      </Box>
    </Flex>
  );
}