import { Box, Button } from "@chakra-ui/react";
import { Form, Formik, FormikErrors, FormikHelpers, FormikProps, FormikValues } from "formik";
import { useEffect, useRef } from "react";
import {     FieldCheckboxGroup,
    FieldDropdown,
    FieldInput,
    FieldInputButton,
    FieldRadioGroup,
    FieldTextarea, } from "../../../components/molecules/field";
import { useExample } from "../../../hooks/examples/useExample";

export const example = (props:any) => {

    const initialValues = {
        userId: "",
        id: 0,
        title: "",
        content: ""
      };

    const formRef = useRef<FormikProps<any>>(null);

    const { getData, postData, handleGetQuery, handlePostMutation } = useExample(
        initialValues,
        formRef,
      );

      useEffect(() => {
        if (getData) {
          formRef.current?.setFieldValue("userId", getData.data.userId);
        }
      }, [getData]);


      const handleSubmit = (values: FormikValues, actions: FormikHelpers<FormikValues>) => {
        console.log(values);
      };

      const handleValidate = (values: FormikValues) => {
        const errors: FormikErrors<FormikValues> = {};
    
        if (values.fieldInputButton === "") {
          errors.fieldInputButton = "필수입력값입니다.";
        }
    
        return errors;
      };
      
      return (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={handleValidate}
          innerRef={formRef}>
          {(props: FormikProps<FormikValues>) => (
            <Form>
              <Box w={"50%"}>
                <FieldInputButton
                  name={"userId"}
                  // value={getData?.data.userNo}
                  btnOnClick={handleGetQuery}
                  isRequired={true}
                  label={"버튼인풋"}
                  buttonLabel={"내장버튼"}
                  onChange={(e:any) => {
                    props.setFieldValue("userNo", e.target.value);
                  }}
                />
              </Box>
              <Box>
                <FieldInput
                  label={"필드인풋"}
                  isRequired={true}
                  name={"fieldInput"}
                  onChange={(e:any) => {
                    props.setFieldValue("fieldInput", e.target.value);
                  }}
                />
              </Box>
              <Box>
                <FieldCheckboxGroup
                  name={"fieldCheckboxGroup"}
                  isRequired={true}
                  label={"필드체크박스그룹"}
                  setFieldValue={props.setFieldValue}
                  options={[
                    { value: "Y", label: "Yes" },
                    { value: "N", label: "No" },
                  ]}
                />
              </Box>
              <Box>
                <FieldDropdown
                  name={"fieldDropdown"}
                  isRequired={true}
                  label={"필드드롭다운"}
                  setFieldValue={props.setFieldValue}
                  options={[
                    { value: "test1", label: "테스트파라미터1" },
                    { value: "test2", label: "테스트파라미터2" },
                  ]}
                />
              </Box>
              <Box>
                <FieldRadioGroup
                  name={"fieldRadioGroup"}
                  isRequired={true}
                  label={"필드라디오그룹"}
                  setFieldValue={props.setFieldValue}
                  options={[
                    { value: "Y", label: "Y" },
                    { value: "N", label: "N" },
                  ]}
                />
              </Box>
              <Box mt={"1%"}>
                <FieldTextarea name={"fieldTextarea"} label={"필드텍스트에어리어"} />
              </Box>
              <Box></Box>
              <Box mt={"1%"}>
                <Button type="submit">SUBMIT</Button>
              </Box>
            </Form>
          )}
        </Formik>
      );
      //E N D components ===========================================================
    };