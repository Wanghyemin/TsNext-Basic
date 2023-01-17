import React from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useField } from "formik";
import { FieldControl } from "./FieldControl";
import { IFieldRadioGroupProps } from "@interfaces/components";

export const FieldRadioGroup = (props: IFieldRadioGroupProps) => {
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
      <RadioGroup
        name={name}
        onChange={(value) => setFieldValue(name, value)}
        value={field.value}
        {...rest}>
        {options &&
          options.map(({ value, label, disabled }) => (
            <Radio key={value} value={value} isDisabled={disabled}>
              {label}
            </Radio>
          ))}
      </RadioGroup>
      {/* </FieldGridContent> */}
    </FieldControl>
  );
};
