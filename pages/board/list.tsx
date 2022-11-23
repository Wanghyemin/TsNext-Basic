import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { listType } from "../../types";
import { Box, Button, ButtonGroup, Flex, Text, Divider } from '@chakra-ui/react'
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

export default function BoardList() {

  const [board, setBoard] = useState([]);

  // 게시판 목록 가져오기
  const list = async () => {
    await axios.get('http://localhost:8000/data')
      .then(res => setBoard(res.data));
  }
  useEffect(() => {
    list();
  }, []);

  // 페이지 이동시 사용할 라우터
  const router = useRouter();

  return (
    <>
      <Flex align="center" justify="center">
          {/* <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          textAlign="center">공지사항</Text> */}
          <TableContainer w="80%">
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>번호</Th>
                  <Th>제목</Th>
                  <Th>내용</Th>
                  <Th>작성자</Th>
                </Tr>
              </Thead>
              <Tbody>
                {board.map((content: listType, index: number) => (
                  <Tr key={content.id} onClick={() => router.push(`/board/detail/${content.id}`)}>
                    <Td>{index + 1}</Td>
                    <Td>{content.title}</Td>
                    <Td>{content.content}</Td>
                    <Td>{content.userId}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th textAlign={"center"} >총  {board.length} 건</Th>
                  <Th><Button bgColor={"#FEB2B2"} textColor={"white"} variant='solid' onClick={() => router.push("/board/write")} > 등  록 </Button></Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
      </Flex>
    </>
  );
}