
import { listType } from "../../types";
import PinkButton from "../../components/atoms/PinkButton";
import { useRouter } from "next/router";
import {  useQuery } from 'react-query';
import { Flex, Table,  Thead,  Tbody,  Tfoot,  Tr,  Th,  Td,  TableContainer} from "@chakra-ui/react";
import { getBoardListAxios } from "../../commonModules/CommonAxios";


const boardList = () => {
  //const [board, setBoard] = useState([]);
  const query = useQuery('data',getBoardListAxios,{cacheTime: 5000});//option

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
              {query.data?.map((content: listType, index: number) => (
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
                <Th>총 {query.data?.length} 건</Th>
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