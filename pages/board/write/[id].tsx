
import PinkButton from "../../../components/atoms/PinkButton";
import PurpleButton from "../../../components/atoms/PurpleButton";
import { useRouter } from "next/router";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Flex, Table, Tbody, Tfoot, Tr, Td, TableContainer, Textarea, Input, Button } from "@chakra-ui/react";
import { useMutation, useQuery } from "react-query";
import { getBoardDetailAxios, putBoardDetailAxios } from "../../../commonModules/CommonAxios";
import { useEffect, useLayoutEffect, useState } from "react";
import DaumPostcode, { DaumPostcodeEmbed } from "react-daum-postcode";
import { CommonAddrModal } from "../../../commonModules/CommonAddrModal";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/locale';

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
      adress1: "",
      adress2: "",
      adress3: "",
      regDt : new Date(),
    },
    onSubmit: () => {
      mutate({
        id: formik.values.id,
        title: formik.values.title,
        userId: formik.values.userId,
        content: formik.values.content,
        adress1: formik.values.adress1,
        adress2: formik.values.adress2,
        adress3: formik.values.adress3,
        regDt: formatDate(formik.values.regDt),
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
<<<<<<< HEAD
      }),
    });
    return (
      <>
=======
    }),
  });

  const changeDateFormat = (date:string) => {
    let dateDate:Date = new Date();
    if(!date){return dateDate}
    else{
      date = '20' + date;
      dateDate = new Date(date)
      return dateDate;
    }
  }
  const formatDate = (date:Date) => {

    console.log(date)

    const year:string = date.getFullYear().toString().substring(2);
    var month:string = (date.getMonth() + 1).toString();
    if(month.length === 1){month = '0' + month}
    var day = date.getDate().toString();
    if(day.length === 1){day = '0' + day}
    return [year, month, day].join('.');
  }
  useEffect(() => {
    formik.setFieldValue("id", query.data?.id);
    formik.setFieldValue("title", query.data?.title);
    formik.setFieldValue("userId", query.data?.userId);
    formik.setFieldValue("content", query.data?.content);
    formik.setFieldValue("adress1", query.data?.adress1);
    formik.setFieldValue("adress2", query.data?.adress2);
    formik.setFieldValue("adress3", query.data?.adress3);
    formik.setFieldValue("regDt", changeDateFormat(query.data?.regDt));
  }, [query.data]);

  const handleClick = () => {
    
  }

    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };
  const onCompletePost = (data: any) => {
    formik.setFieldValue("adress1", data?.zonecode);
    formik.setFieldValue("adress2", data?.roadAddress);
    //setAddress(data.address);
    //zonecode  roadAddress
    setIsPopupOpen( current => !current );
  };
  return (
    <>
>>>>>>> e8cf5c39397dfbb4e36a8903008fe6469c57abc1
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
                  <Td rowSpan={3}>주소
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
                    작성일
                  </Td>
                  <Td>
                  <DatePicker locale={ko}  id="regDt" dateFormat="yyyy년 MM월 dd일" 
                  selected={formik.values.regDt} 
                  onChange={(res)=>{
                    formik.setFieldValue("regDt", res);
                    }}/>
                  </Td>
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

      {isPopupOpen &&<CommonAddrModal onComplete={onCompletePost} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />}

    </>
  );
}
export default modify