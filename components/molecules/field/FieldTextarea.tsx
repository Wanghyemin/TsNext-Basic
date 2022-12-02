import React from "react";
import { Flex, Textarea } from "@chakra-ui/react";
import { useField } from "formik";
import { FieldControl } from "./FieldControl";
import { IFieldTextareaProps } from "@interfaces/components";

export const FieldTextarea = (props: IFieldTextareaProps) => {
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

      <Textarea {...rest} {...field} />

      {/* <Textarea id={name} {...rest} {...field} /> */}
      {/* </FieldGridContent> */}
    </FieldControl>
  );
};
