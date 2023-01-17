import React from "react";
import { useField } from "formik";
import { FieldControl } from "./FieldControl";
import { IFieldDropdownProps } from "@interfaces/components";
import { Select } from "@components/atoms";

export const FieldDropdown = (props: IFieldDropdownProps) => {
  const { name, label, isRequired, tooltipText, helperText, setFieldValue, options, ...rest } =
    props;
  const [field, meta, helpers] = useField(name);

  return (
    <FieldControl
      name={name}
      label={label}
      isRequired={isRequired}
      tooltipText={tooltipText}
      helperText={helperText}>
      {/* <FieldGridContent> */}
      <Select
        {...rest}
        initialValue={meta.initialValue}
        value={field.value}
        options={options}
        onChange={(value) => {
          setFieldValue(name, value);
        }}
      />
      {/* </FieldGridContent> */}
    </FieldControl>
  );
};
