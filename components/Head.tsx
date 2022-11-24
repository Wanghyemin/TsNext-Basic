import { Box, Text } from "@chakra-ui/react";

const Head : React.FC = () => {
  return (
    <>
        <Box w="100%" h="20px" bgGradient="linear(to-t, pink.100, white)"></Box>
        <Text
            bgGradient="linear(to-t, yellow , pink)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            textAlign={"center"}
            >
        FourLab Board
        </Text>
    </>
  );
}

export default Head