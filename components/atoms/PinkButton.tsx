import { Button } from "@chakra-ui/react";

const PinkButton = (props:any) => {
  return (
    <Button
      bgColor={"#FEB2B2"}
      textColor={"white"}
      variant="solid"
      m={1}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};
export default PinkButton;
