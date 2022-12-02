import { Button } from "@chakra-ui/react";
import { Input } from "@components/atoms";
import { IFieldInputButtonProps, IFieldInputProps } from "@interfaces/components";
import { useField } from "formik";
import { FieldinnerButton } from "../label/FieldStyle";
import { FieldControl } from "./FieldControl";

export const FieldInput = (props: IFieldInputProps) => {
  const { name, label, isRequired, tooltipText, helperText, ...rest } = props;
  const [field] = useField(name);

  return (
    <FieldControl
      name={name}
      label={label}
      isRequired={isRequired}
      tooltipText={tooltipText}
      helperText={helperText}>
      {/* <FieldGridContent> */}
      <Input
        // id={name}
        {...field}
        {...rest}
      />
      {/* </FieldGridContent> */}
    </FieldControl>
  );
};

export const FieldInputButton = (props: IFieldInputButtonProps) => {
  const { name, label, isRequired, tooltipText, helperText, buttonLabel, btnOnClick, ...rest } =
    props;
  const [field] = useField(name);

  return (
    <FieldControl
      name={name}
      label={label}
      isRequired={isRequired}
      tooltipText={tooltipText}
      helperText={helperText}>
      {/* <FieldGridContent> */}
      <Button sx={FieldinnerButton} onClick={btnOnClick} colorScheme={"btn-gray"}>
        {buttonLabel}
      </Button>
      <Input
        // id={name}
        {...field}
        {...rest}
      />
      {/* </FieldGridContent> */}
    </FieldControl>
  );
};
