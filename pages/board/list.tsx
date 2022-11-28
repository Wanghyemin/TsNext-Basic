import commonAxios from "../../commonModules/CommonAxios";
import { listType } from "../../types";
import PinkButton from "../../components/atoms/PinkButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Flex, Table,  Thead,  Tbody,  Tfoot,  Tr,  Th,  Td,  TableContainer, useQuery } from "@chakra-ui/react";


const boardList = () => {
  const [board, setBoard] = useState([]);

  // 게시판 목록 가져오기
  const list = async () => {
    await commonAxios.get("/data")
      .then((res) => setBoard(res.data));
  };

  useEffect(() => {
    list();
  }, []);

  // 페이지 이동시 사용할 라우터
  const router = useRouter();

  return (
    <>
      <Flex align="center" justify="center">
        <TableContainer w="80%">
          <Table variant="simple">
            <Thead bgColor={"yellow.50"}>
              <Tr>
                <Th>번호</Th>
                <Th>제목</Th>
                <Th>내용</Th>
                <Th>작성자</Th>
              </Tr>
            </Thead>
            <Tbody>
              {board.map((content: listType, index: number) => (
                <Tr key={content.id}>
                  <Td>{index + 1}</Td>
                  <Td
                    onClick={() => router.push(`/board/detail/${content.id}`)}
                  >
                    {content.title}
                  </Td>
                  <Td>{content.content}</Td>
                  <Td>{content.userId}</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot bgColor={"yellow.50"}>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th>총 {board.length} 건</Th>
                <Th>
                  <PinkButton onClick={() => router.push("/board/write")}> 등 록 </PinkButton>
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}

export default boardList