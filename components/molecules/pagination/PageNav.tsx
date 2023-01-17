import { Box, Button, Flex, Icon, IconButton } from "@chakra-ui/react";
import React from "react";

export const PageNav = () => {
  return (
    <Flex justifyContent={'center'}>
      <Flex justifyContent={'space-between'} width={'253px'}>
        <Icon aria-label={"ChevronLeftIcon"} width={'25px'} height={'25px'}>이전</Icon>
        <Button border={'0'} borderRadius={'50%'} outline={'0'} width={'25px'} height={'25px'} color={'#ffffff'} fontSize={'14px'} backgroundColor={'#404152'}>999</Button>
        <Button border={'0'} borderRadius={'50%'} outline={'0'} width={'25px'} height={'25px'} color={'#404152'} fontSize={'14px'} backgroundColor={'transparent'}>2</Button>
        <Button border={'0'} borderRadius={'50%'} outline={'0'} width={'25px'} height={'25px'} color={'#404152'} fontSize={'14px'} backgroundColor={'transparent'}>3</Button>
        <Button border={'0'} borderRadius={'50%'} outline={'0'} width={'25px'} height={'25px'} color={'#404152'} fontSize={'14px'} backgroundColor={'transparent'}>4</Button>
        <Button border={'0'} borderRadius={'50%'} outline={'0'} width={'25px'} height={'25px'} color={'#404152'} fontSize={'14px'} backgroundColor={'transparent'}>5</Button>
        <Icon aria-label={"ChevronRightIcon"} width={'25px'} height={'25px'}>다음</Icon>
      </Flex>
    </Flex>
  );
}