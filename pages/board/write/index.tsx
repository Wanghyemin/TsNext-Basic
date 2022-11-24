import commonAxios from "../../../commonModules/CommonAxios";
import PinkButton from "../../../components/atoms/PinkButton";
import PurpleButton from "../../../components/atoms/PurpleButton";
import { useRouter } from "next/router";
import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import { Flex, Input, Textarea, Table, Tbody, Tfoot, Tr, Td, TableContainer } from "@chakra-ui/react";


const write = () => {
  // Router를 사용하여 id값 도출
  const router = useRouter();
  const id: number = Number(router.query.id);

  // 등록 onClick
  async function handleSubmit() {
    await commonAxios
      .post(`/data`, {
        title: formik.values.title,
        userId: formik.values.userId,
        content: formik.values.content,
      })
      .then(() => router.push("/board/list"))
  }

  // Formik : onChange를 자동으로 할 수 있음 + 유효성 검사를 간편하게 해줌
  const formik = useFormik({
    initialValues: {
      title: "",
      userId: "",
      content: "",
    },
    onSubmit: () => {
      handleSubmit();
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
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td colSpan={2} style={{ textAlign: "center" }}>
                    <PinkButton type={"submit"}> 등 록 </PinkButton>
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
export default write