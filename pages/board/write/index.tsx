import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { listType } from "../../../types";
import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";


export default function write() {

    // Router를 사용하여 id값 도출
    const router = useRouter();
    const id: number = Number(router.query.id);

    // 등록 onClick
    async function  handleSubmit(values:FormikValues) {
        await axios.post(`http://localhost:8000/data`, {
                title: values.title,
                userId: values.userId,
                content: values.content,
            })
            .then(()=>router.push("/board/list"))
            .catch((err)=>console.error("handleSubmit ERROR : " + err));
    }

    // Formik : onChange를 자동으로 할 수 있음 + 유효성 검사를 간편하게 해줌
    const formik = useFormik({
        initialValues:{
            title:"",
            userId:"",
            content:""
        },
        onSubmit: (values:FormikValues) => {
            alert(JSON.stringify(values,null,2));
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
                <h1>게시글 등록</h1>
                <div className="table">
                    <div className="dttr">
                        <span className="dt1">제목</span>
                        <span className="dt2">
                            <input id="title" type="text" {...formik.getFieldProps('title')}  />
                        </span>
                        {formik.touched.title && formik.errors.title ? (
                            <span>{formik.errors.title}</span>
                            ) : null}
                    </div>
                    <div className="dttr">
                        <span className="dt1">작성자</span>
                        <span className="dt2">
                            <input id="userId" type="text" {...formik.getFieldProps('userId')}/>
                        </span>
                        {formik.touched.userId && formik.errors.userId ? (
                            <span>{formik.errors.userId}</span>
                            ) : null}
                    </div>
                    <div className="dttr2">
                        <span className="dt1">내용</span>
                        <span className="dt2">
                            <textarea id="content" {...formik.getFieldProps('content')}>
                            </textarea>
                        </span>
                        {formik.touched.content && formik.errors.content ? (
                            <span>{formik.errors.content}</span>
                            ) : null}
                    </div>
                </div>
                <button className="button" type="submit">등록</button>
                <button className="button" onClick={() => router.push("/board/list")}>취소</button>
            </form>
        </>
    )
}