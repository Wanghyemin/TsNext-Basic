import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { listType } from "../../../types";
import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, ButtonGroup } from '@chakra-ui/react'


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
                <div>
                    <div>
                        <span>제목</span>
                        <span>
                            <input id="title" type="text" {...formik.getFieldProps('title')}  />
                        </span>
                        {formik.touched.title && formik.errors.title ? (
                            <span>{formik.errors.title}</span>
                            ) : null}
                    </div>
                    <div>
                        <span>작성자</span>
                        <span>
                            <input id="userId" type="text" {...formik.getFieldProps('userId')}/>
                        </span>
                        {formik.touched.userId && formik.errors.userId ? (
                            <span>{formik.errors.userId}</span>
                            ) : null}
                    </div>
                    <div>
                        <span>내용</span>
                        <span>
                            <textarea id="content" {...formik.getFieldProps('content')}>
                            </textarea>
                        </span>
                        {formik.touched.content && formik.errors.content ? (
                            <span>{formik.errors.content}</span>
                            ) : null}
                    </div>
                </div>
                <Button bgColor={"#FEB2B2"} textColor={"white"} variant='solid' m={1} type="submit" > 등  록 </Button>
                <Button bgColor={"#ED64A6"} textColor={"white"} variant='solid' m={1} onClick={() => router.push("/board/list")} > 목  록 </Button>
            </form>
        </>
    )
}