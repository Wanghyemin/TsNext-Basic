import { listType } from "../../types";
import PinkButton from "../../components/atoms/PinkButton";
import { useQuery } from "react-query";
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Button,
} from "@chakra-ui/react";
import { getBoardListAxios } from "../../commonModules/CommonAxios";
import Link from "next/link";
import { useState } from "react";
import { Form } from "formik";


const boardList = () => {
  // 데이터 목록 불러오기
  const query = useQuery("data", getBoardListAxios, { cacheTime: 5000 }); //option
  console.log(query);
  const [searchKeyword, setSerchKeyword] = useState("");

  // 검색데이터
  const handleClick = (event: any) => {
    event.preventDefault();
    setSerchKeyword(event.target.search.value);
  };
  // 검색목록
  const changedata = query.data?.filter((data: listType) => {
    return data.title
      ?.replace(/ /g, "")
      .includes(searchKeyword.replace(/ /g, ""));
  });

  return (
    <>
      <Flex align="center" justify="center" onSubmit={handleClick}>
        <form>
          <input name="search" />
          <Button type="submit">검색</Button>
        </form>
      </Flex>
      <Flex align="center" justify="center">
        <TableContainer w="80%">
          <Table variant="simple">
            <Thead bgColor={"yellow.50"}>
              <Tr>
                <Th w={"5%"}>번호</Th>
                <Th w={"30%"}>제목</Th>
                <Th w={"30%"}>내용</Th>
                <Th w={"20%"}>주소</Th>
                <Th w={"10%"}>작성자</Th>
                <Th w={"10%"}>작성일</Th>
              </Tr>
            </Thead>
            <Tbody>
              {changedata?.map((content: listType, index: number) => (
                <Tr key={content.id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Link href={`/board/detail/${content.id}`}>
                      {content.title}
                    </Link>
                  </Td>
                  <Td>{content.content}</Td>
                  <Td>
                    {content.adress1}
                    {content.adress2}
                    {content.adress3}
                  </Td>
                  <Td>{content.userId}</Td>
                  <Td>{content.regDt}</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot bgColor={"yellow.50"}>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th>총 {changedata?.length} 건</Th>
                <Th></Th>
                <Th>
                  <PinkButton>
                    <Link href={`/board/write`}> 등 록 </Link>
                  </PinkButton>
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
};

export default boardList;
