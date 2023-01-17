import React, { Fragment } from "react";
import {
  Flex,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  GridItem,
} from "@chakra-ui/react";
import { useField } from "formik";
// import { FieldGrid, FieldGridTitle } from '.'
import { FieldContent, FieldHeader } from "../label/FieldStyle";

export interface FieldControlProps extends FormControlProps {
  name: string;
  label?: string;
  helperText?: string;
  tooltipText?: string;
  exampleText?: string;
}

export const FieldControl = ({
  children,
  name,
  label,
  helperText,
  tooltipText,
  exampleText,
  ...rest
}: FieldControlProps) => {
  const [, { error, touched }] = useField(name);
  const isInvalid = rest.isInvalid ?? !!(touched && error);
  const labelList = label === undefined ? [] : label.split("\n");

  return (
    <FormControl {...rest} isInvalid={isInvalid}>
      <Flex>
        <Flex sx={FieldHeader}>
          <FormLabel htmlFor={name}>
            {labelList.length === 1
              ? label
              : labelList.map((label, index) =>
                  index === 0 ? (
                    <>{label}</>
                  ) : (
                    <>
                      <br />
                      {label}
                    </>
                  ),
                )}
          </FormLabel>
        </Flex>
        <Flex sx={FieldContent}>
          {children}
          {(!!helperText || isInvalid) && (
            <>
              {/* //   <GridItem colStart={{ md: 2 }} colEnd={{ md: 2 }}> */}
              {!!helperText && !isInvalid && (
                <FormHelperText mt="0" mb="10px" pl="15px">
                  {helperText.split("\n").map((line, index) => (
                    <Fragment key={`${line}-${index}`}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
                </FormHelperText>
              )}
              <FormErrorMessage mt="0" mb="10px" pl="15px">
                {error?.split("\n").map((line, index) => (
                  <Fragment key={`${line}-${index}`}>
                    {line}
                    <br />
                  </Fragment>
                ))}
              </FormErrorMessage>
              {/* </GridItem> */}
            </>
          )}
        </Flex>
      </Flex>
    </FormControl>
  );
};
