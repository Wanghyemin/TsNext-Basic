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
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/locale';
import { CommonAddrModal } from "../../../commonModules/CommonAddrModal";

const write = () => {
  // Router를 사용하여 id값 도출
  const router = useRouter();
  const id: number = Number(router.query.id);
  const { mutate } = useMutation(postBoardDetailAxios);
  //const [startDate, setStartDate] = useState(Date.now);

  const formatDate = (date:Date) => {

    console.log(date)

    const year:string = date.getFullYear().toString().substring(2);
    var month:string = (date.getMonth() + 1).toString();
    if(month.length === 1){month = '0' + month}
    var day = date.getDate().toString();
    if(day.length === 1){day = '0' + day}
    return [year, month, day].join('.');
  }

  //Formik : onChange를 자동으로 할 수 있음 + 유효성 검사를 간편하게 해줌
  const formik = useFormik({
    initialValues: {
      title: "",
      userId: "",
      content: "",
      adress1: "",
      adress2: "",
      adress3: "",
      regDt : new Date(), // 포믹 regDt는 Date
      fileName : []
    },
    onSubmit: () => {
      mutate({
        title: formik.values.title,
        userId: formik.values.userId,
        content: formik.values.content,
        adress1: formik.values.adress1,
        adress2: formik.values.adress2,
        adress3: formik.values.adress3,
        regDt : formatDate(formik.values.regDt), // mutate regDt는 string
        fileName : formik.values.fileName
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

  const onCompletePost = (data: any) => {
    formik.setFieldValue("adress1", data?.zonecode);
    formik.setFieldValue("adress2", data?.roadAddress);
    setIsPopupOpen( current => !current );
  };

  const handleFileChange = (event:any) => {
    const files:File[] = Array.prototype.slice.call(event.target.files)
    const fileArr: string[] = files.map( file => file.name);
    formik.setFieldValue("fileName", fileArr)
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
                    <input type="file" multiple onChange={handleFileChange}/>
                    {formik.values.fileName?.map((name,index) => (<div key={index}>{name}<br/></div>))}
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
                    <PinkButton type={"submit"}> 등 록 </PinkButton>
                    <PurpleButton onClick={() => router.push("/board/list")}>
                      목 록
                    </PurpleButton>
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
};
export default write;
