
import PinkButton from "../../../components/atoms/PinkButton";
import PurpleButton from "../../../components/atoms/PurpleButton";
import { useRouter } from "next/router";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Flex, Table, Tbody, Tfoot, Tr, Td, TableContainer, Textarea, Input, Button } from "@chakra-ui/react";
import { useMutation, useQuery } from "react-query";
import { getBoardDetailAxios, putBoardDetailAxios } from "../../../commonModules/CommonAxios";
import { useEffect, useLayoutEffect } from "react";


const modify = () => {
  // Router를 사용하여 id값 도출
  const router = useRouter();
  const id: number = Number(router.query.id);
  const query = useQuery( ['data', id] , () => getBoardDetailAxios(id), {cacheTime: 5000});
  const { mutate } = useMutation( putBoardDetailAxios );

  // Formik : onChange를 자동으로 할 수 있음 + 유효성 검사를 간편하게 해줌
  const formik = useFormik({
    initialValues: {
      id: 0,
      title: "",
      userId: "",
      content: "",
      adress:""
    },
    onSubmit: () => {
      mutate({
        id: formik.values.id,
        title: formik.values.title,
        userId: formik.values.userId,
        content: formik.values.content,
        adress: formik.values.adress
      })
      router.push("/board/list");
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
      adress: Yup.string()
        .max(500, "최대 500자만 가능합니다.")
        .required("Required"),
    }),
  });

  useEffect(() => {
    formik.setFieldValue("id", query.data?.id);
    formik.setFieldValue("title", query.data?.title);
    formik.setFieldValue("userId", query.data?.userId);
    formik.setFieldValue("content", query.data?.content);
    formik.setFieldValue("adress", query.data?.adress);
  }, [query.data]);

  const handleClick = () => {
    
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex align="center" justify="center">
          <TableContainer w="60%">
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td rowSpan={2}>제목</Td>
                  <Td>
                    <Input
                      id="title"
                      type="text"
                      {...formik.getFieldProps("title")}
                    />
                  </Td>
                </Tr>
                <Tr>
                  {formik.touched.title && formik.errors.title ? (
                    <Td>{formik.errors.title}</Td>
                  ) : null}
                </Tr>
                <Tr>
                  <Td rowSpan={2}>작성자</Td>
                  <Td>
                    <Input
                      id="userId"
                      type="text"
                      {...formik.getFieldProps("userId")}
                    />
                  </Td>
                </Tr>
                <Tr>
                  {formik.touched.userId && formik.errors.userId ? (
                    <Td>{formik.errors.userId}</Td>
                  ) : null}
                </Tr>
                <Tr>
                  <Td rowSpan={2}>내용</Td>
                  <Td>
                    <Textarea
                      id="content"
                      {...formik.getFieldProps("content")}
                    ></Textarea>
                  </Td>
                </Tr>
                <Tr>
                  {formik.touched.content && formik.errors.content ? (
                    <Td>{formik.errors.content}</Td>
                  ) : null}
                </Tr>
                <Tr>
                  <Td rowSpan={2}>주소</Td>
                  <Td>
                  <Button onClick={handleClick}></Button>
                  <Input
                      id="adress"
                      type="text"
                      {...formik.getFieldProps("adress")}
                    />
                  </Td>
                </Tr>
                <Tr>
                  {formik.touched.adress && formik.errors.adress ? (
                    <Td>{formik.errors.adress}</Td>
                  ) : null}
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td colSpan={2} style={{ textAlign: "center" }}>
                    <PinkButton type={"submit"}> 수 정 </PinkButton>
                    <PurpleButton onClick={() => router.push("/board/list")}> 목 록 </PurpleButton>
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Flex>
      </form>
    </>
  );
}
export default modify