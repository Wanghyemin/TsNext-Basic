import PinkButton from "../../../components/atoms/PinkButton";
import PurpleButton from "../../../components/atoms/PurpleButton";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Flex,
  Input,
  Textarea,
  Table,
  Tbody,
  Tfoot,
  Tr,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { postBoardDetailAxios } from "../../../commonModules/CommonAxios";
import DaumPostcode, { DaumPostcodeEmbed } from "react-daum-postcode";
import { useState } from "react";
import SearchForm from "../../../components/atoms/SeachForm";

const write = () => {
  // Router를 사용하여 id값 도출
  const router = useRouter();
  const id: number = Number(router.query.id);
  const { mutate } = useMutation(postBoardDetailAxios);

  //Formik : onChange를 자동으로 할 수 있음 + 유효성 검사를 간편하게 해줌
  const formik = useFormik({
    initialValues: {
      title: "",
      userId: "",
      content: "",
      adress1: "",
      adress2: "",
      adress3: "",
    },
    onSubmit: () => {
      mutate({
        title: formik.values.title,
        userId: formik.values.userId,
        content: formik.values.content,
        adress1: formik.values.adress1,
        adress2: formik.values.adress2,
        adress3: formik.values.adress3,
      });
      router.push("/board/list");
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

  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const onCompletePost = (data: any) => {
    console.log(data);
    formik.setFieldValue("adress1", data?.zonecode);
    formik.setFieldValue("adress2", data?.roadAddress);
    //setAddress(data.address);
    //zonecode  roadAddress
  };
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
                  <Td rowSpan={3}>
                    주소 <br />
                    <Button onClick={openPostCode}>주소찾기</Button>
                  </Td>
                  <Td>
                    <Input
                      id="adress1"
                      {...formik.getFieldProps("adress1")}
                      readOnly
                      placeholder="우편번호"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Input
                      id="adress2"
                      readOnly
                      placeholder="도로명주소"
                      {...formik.getFieldProps("adress2")}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Input
                      id="adress3"
                      placeholder="상세주소"
                      {...formik.getFieldProps("adress3")}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    날씨코드
                  </Td>
                  <Td>
                    <Input
                      w={"500px"}
                      id="weather"
                      placeholder="날씨코드"
                    />
                    <button onClick={() => {window.open("https://www.weather.go.kr/w/index.do",'_blank')}}>날씨코드</button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    파일첨부
                  </Td>
                  <Td>
                    <input type="file" id="fileUpload" />
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td colSpan={2} style={{ textAlign: "center" }}>
                    <PinkButton type={"submit"}> 등 록 </PinkButton>
                    <PurpleButton onClick={() => router.push("/board/list")}>
                      {" "}
                      목 록{" "}
                    </PurpleButton>
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Flex>
      </form>

      <div className="popupDom">
        {isPopupOpen && (
          <DaumPostcodeEmbed
            autoClose={true}
            onComplete={onCompletePost}
            defaultQuery="천호대로 1077"
          />
        )}
      </div>
    </>
  );
};
export default write;
