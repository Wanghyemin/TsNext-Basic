import { Button } from "@chakra-ui/react";

const PurpleButton = (props:any) => {
  return (
    <Button
      bgColor={"#ED64A6"}
      textColor={"white"}
      variant="solid"
      m={1}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};
export default PurpleButton;
