import commonAxios from "../../../commonModules/CommonAxios";
import { listType } from "../../../types";
import PinkButton from "../../../components/atoms/PinkButton";
import PurpleButton from "../../../components/atoms/PurpleButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {  Table, Tbody, Tfoot, Tr, Td, TableContainer , Button, Flex } from "@chakra-ui/react";




const detail = () => {
  const [board, setBoard] = useState<listType>({
    id: 0,
    title: "",
    userId: "",
    content: "",
  });

  const router = useRouter();
  const id = Number(router.query.id) || "";

  useEffect(() => {
    detail();
  }, []);

  // 도출된 id값을 사용한 Detail페이지 출력
  const detail = async () => {
    await commonAxios
      .get(`http://localhost:8000/data/${id}`)
      .then((res) => setBoard(res.data));
  };

  // 삭제후 목록으로 이동
  const handleDelete = async () => {
    await commonAxios
      .delete(`/data/${board.id}`)
      .then(() => router.push("/board/list"))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Flex align="center" justify="center">
        <TableContainer w="60%">
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>No</Td>
                <Td>{board.id}</Td>
              </Tr>
              <Tr>
                <Td>제목</Td>
                <Td>{board.title}</Td>
              </Tr>
              <Tr>
                <Td>작성자</Td>
                <Td>{board.userId}</Td>
              </Tr>
              <Tr>
                <Td>내용</Td>
                <Td>{board.content}</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Td colSpan={2} style={{ textAlign: "center" }}>
                  <PinkButton onClick={() => router.push(`/board/write/${board.id}`)}> 수 정 </PinkButton>
                  <PurpleButton onClick={() => router.push("/board/list")}> 목 록 </PurpleButton>
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