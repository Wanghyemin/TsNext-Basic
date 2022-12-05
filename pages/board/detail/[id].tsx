import PinkButton from "../../../components/atoms/PinkButton";
import PurpleButton from "../../../components/atoms/PurpleButton";
import { delBoardDetailAxios, getBoardDetailAxios } from "../../../commonModules/CommonAxios";
import { useRouter } from "next/router";
import {  Table, Tbody, Tfoot, Tr, Td, TableContainer , Flex } from "@chakra-ui/react";
import { useMutation, useQuery } from "react-query";
import React, { useEffect } from "react";
import Link from "next/link";

const detail = () => {

  const router = useRouter();
  const id:number = Number(router.query.id);

  // api 요청하는 함수(addTodo) 를 작성했을 경우
  const { mutate } = useMutation(delBoardDetailAxios);

  const query = useQuery( ['data', id] , () => getBoardDetailAxios(id), {cacheTime: 5000});
  //key 로 id를 넣어줘야 새로고침시 데이터 도출된다.

  // 삭제후 목록으로 이동
  const handleDelete = (event:React.MouseEvent<HTMLButtonElement>) => {
    mutate(query.data?.id)
    router.push("/board/list")
  };

  return (
    <>
      <Flex align="center" justify="center">
        <TableContainer w="60%">
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>No</Td>
                <Td>{query.data?.id}</Td>
              </Tr>
              <Tr>
                <Td>제목</Td>
                <Td>{query.data?.title}</Td>
              </Tr>
              <Tr>
                <Td>작성자</Td>
                <Td>{query.data?.userId}</Td>
              </Tr>
              <Tr>
                <Td>내용</Td>
                <Td>{query.data?.content}</Td>
              </Tr>
              <Tr>
                <Td>주소</Td>
                <Td>[ {query.data?.adress1} ] {query.data?.adress2} {query.data?.adress3} </Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Td colSpan={2} style={{ textAlign: "center" }}>
                  <PinkButton><Link href={`/board/write/${query.data?.id}`}> 수 정 </Link></PinkButton>
                  <PurpleButton><Link href={`/board/list`}> 목 록 </Link></PurpleButton>
                  <PinkButton onClick={handleDelete}> 삭 제 </PinkButton>
                </Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}
export default detail