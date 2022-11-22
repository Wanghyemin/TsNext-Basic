import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { listType } from "../../../types";
import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";


export default function write() {

    const [board, setBoard] = useState<listType>(
        { id: 0, title: '', userId: '', content: '' }
    );

    // Router를 사용하여 id값 도출
    const router = useRouter();
    const id: number = Number(router.query.id);

    // onChagne에 대한 EventListener
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name: string = event.target.name;
        const value: string | number = event.target.value;
        setBoard({
            ...board,
            [name]: value
        })
    }

    // 등록 onClick
    const handleSubmit = async () => {
        await axios.post(`http://localhost:8000/data`, {
                title: board.title,
                userId: board.userId,
                content: board.content,
            })
            .then(()=>router.push("/board/list"))
            .catch((err)=>console.error("handleSubmit ERROR : " + err));
    }

    //formik
    const formik = useFormik({
        initialValues:{
            title:"",
            userId:"",
            content:""
        },
        onSubmit: (values:FormikValues) => {
            alert(JSON.stringify(values,null,2));
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .max(15, "Must be 15 Characters or less")
                .required("Required"),
            userId: Yup.string()
                .max(15, "Must be 15 Characters or less")
                .required("Required"),
            content: Yup.string()
                .max(200, "Must be 200 Characters or less")
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