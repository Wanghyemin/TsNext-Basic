import { listType } from "../types";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const CommonFormik: React.FC = (props: any) => {

  const initialValues: listType = { id: 0, title: "", userId: "", content: "" };

  const validationSchema = Yup.object().shape({
    title: Yup.string().max(30, "최대 30자만 가능합니다.").required("Required"),
    userId: Yup.string()
      .max(10, "최대 10자만 가능합니다.")
      .required("Required"),
    content: Yup.string()
      .max(500, "최대 500자만 가능합니다.")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      {props.children}
    </Formik>
  );
};
export default CommonFormik;
