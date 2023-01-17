import React from "react";
import { Box, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useField } from "formik";
import { IFieldCheckboxGroupProps } from "@interfaces/components";
import { FieldControl } from "./FieldControl";

export const FieldCheckboxGroup = (props: IFieldCheckboxGroupProps) => {
  const { name, label, isRequired, tooltipText, helperText, setFieldValue, options, ...rest } =
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
      <Box>
        <CheckboxGroup
          onChange={(value) => {
            setFieldValue(name, value);
          }}
          value={field.value}
          {...rest}>
          {options &&
            options.map(({ value, label, disabled }) => (
              <Checkbox
                key={value}
                value={value}
                isDisabled={disabled}
                isRequired={isRequired && field.value?.length === 0 ? true : false}>
                {label}
              </Checkbox>
            ))}
        </CheckboxGroup>
      </Box>
      {/* </FieldGridContent> */}
    </FieldControl>
  );
};
