import { useFormik } from "formik";
import * as Yup from "yup";

const commonFormik = (props : Promise<void> ) => {
    const formik = useFormik({
        initialValues: {
          title: "",
          userId: "",
          content: "",
        },
        onSubmit: () => {
          {props}
        },
        validationSchema: Yup.object({
          title: Yup.string()
            .max(20, "최대 20자만 가능합니다.")
            .required("Required"),
          userId: Yup.string()
            .max(10, "최대 10자만 가능합니다.")
            .required("Required"),
          content: Yup.string()
            .max(100, "최대 100자만 가능합니다.")
            .required("Required"),
        }),
      });
    return formik;
}
export default commonFormik