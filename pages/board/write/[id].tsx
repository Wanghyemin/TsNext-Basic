import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { listType } from "../../../types";
import { Formik, FormikValues, useFormik } from "formik";
import * as Yup from "yup";

export default function modify() {

  // Router를 사용하여 id값 도출
  const router = useRouter();
  const id: number = Number(router.query.id);

  const detail = async () => {
    await axios.get(`http://localhost:8000/data/${id}`)
      .then(res => {
        formik.setValues;
        console.log(formik.values.title)
      })
  }
  
  useEffect(() => {
    detail();
  }, [])

  // 수정 onClick
  const handleSubmit = async (values:FormikValues) => {
    const response = await axios.put(`http://localhost:8000/data/${id}`, {
      title: values.title,
      userId: values.userId,
      content: values.content,
    })
      .then(() => router.push("/board/list"))
      .catch(error => console.error(error))
  }

    // Formik : onChange를 자동으로 할 수 있음 + 유효성 검사를 간편하게 해줌
    const formik = useFormik({
      initialValues:{
          title: "",
          userId: "",
          content: ""
      },
      onSubmit: (values:FormikValues) => {
          handleSubmit(values);
      },
      validationSchema: Yup.object({
          title: Yup.string()
              .max(30, "최대 30자만 가능합니다.")
              .required("Required"),
          userId: Yup.string()
              .max(10, "최대 10자만 가능합니다.")
              .required("Required"),
          content: Yup.string()
              .max(500, "최대 500자만 가능합니다.")
              .required("Required"),
       })
  });
  return (
    <>
     <form onSubmit={formik.handleSubmit}>
        <h1>게시글 수정</h1>
        <div className="table">
          <div className="dttr">
            <span className="dt1">No</span>
            <span className="dt2"></span>
          </div>
          <div className="dttr">
            <span className="dt1">제목</span>
            <span className="dt2"><input id="title" type="text" {...formik.getFieldProps('title')}/></span>
          </div>
          <div className="dttr">
            <span className="dt1">작성자</span>
            <span className="dt2"><input id="userId" type="text" {...formik.getFieldProps('userId')} /></span>
          </div>
          <div className="dttr2">
            <span className="dt1">내용</span>
            <span className="dt2"><textarea id="content" {...formik.getFieldProps('content')}></textarea></span>
          </div>
        </div>
        <button className="button" type="submit">수정</button>
        <button className="button" onClick={() => router.push("/board/list")}>목록</button>
      </form>
    </>
  )
}