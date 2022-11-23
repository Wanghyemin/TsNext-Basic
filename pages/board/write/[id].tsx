import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { listType } from "../../../types";
import { Formik, FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
export default function modify() {

  // Router를 사용하여 id값 도출
  const router = useRouter();
  const id: number = Number(router.query.id);

  const detail = async () => {
    await axios.get(`http://localhost:8000/data/${id}`)
      .then(res => {
        formik.setFieldValue('title', res.data.title);
        formik.setFieldValue('userId', res.data.userId);
        formik.setFieldValue('content', res.data.content);
      })
  }

  useEffect(() => {
    detail();
  }, [])

  // 수정 onClick
  const handleSubmit = async (values: FormikValues) => {
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
    initialValues: {
      id: "",
      title: "",
      userId: "",
      content: ""
    },
    onSubmit: (values: FormikValues) => {
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
        <Flex align="center" justify="center">
          <TableContainer w="60%">
            <Table variant='simple'>
              <Tbody>
                <Tr>
                  <Td rowSpan={2}>제목</Td>
                  <Td><input id="title" type="text" {...formik.getFieldProps('title')} /></Td>
                </Tr>
                <Tr>
                  {formik.touched.title && formik.errors.title ? (
                    <Td>{formik.errors.title}</Td>
                  ) : null}
                </Tr>
                <Tr>
                  <Td rowSpan={2}>작성자</Td>
                  <Td><input id="userId" type="text" {...formik.getFieldProps('userId')} /></Td>
                </Tr>
                <Tr>
                  {formik.touched.userId && formik.errors.userId ? (
                    <Td>{formik.errors.userId}</Td>
                  ) : null}
                </Tr>
                <Tr>
                  <Td rowSpan={2}>내용</Td>
                  <Td><textarea id="content" {...formik.getFieldProps('content')}></textarea></Td>
                </Tr>
                <Tr>
                  {formik.touched.content && formik.errors.content ? (
                    <Td>{formik.errors.content}</Td>
                  ) : null}
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td colSpan={2} style={{ textAlign: "center" }}>
                    <Button bgColor={"#FEB2B2"} textColor={"white"} variant='solid' m={1} type="submit" > 수  정 </Button>
                    <Button bgColor={"#ED64A6"} textColor={"white"} variant='solid' m={1} onClick={() => router.push("/board/list")} > 목  록 </Button>
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Flex>
      </form>
    </>
  )
}