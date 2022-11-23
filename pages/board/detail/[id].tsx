import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { listType } from "../../../types";
import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react'
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
export default function detail() {

    const [board, setBoard] = useState<listType>(
        { id: 0, title: '', userId: '', content: '' }
    );

    const router = useRouter();
    const id = Number(router.query.id) || '';

    useEffect(() => {
        detail();
    }, []);

    // 도출된 id값을 사용한 Detail페이지 출력
    const detail = async () => {
        await axios.get(`http://localhost:8000/data/${id}`)
            .then(res => setBoard(res.data));
    }

    // 삭제후 목록으로 이동
    const handleDelete = async () => {
        await axios.delete(`http://localhost:8000/data/${board.id}`)
            .then(() => router.push("/board/list"))
            .catch((err) => console.error(err));
    }

    return (
        <>
            <Flex align="center" justify="center">
                <TableContainer w="60%">
                    <Table variant='simple'>
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
                                    <Button bgColor={"#FEB2B2"} textColor={"white"} variant='solid' m={1} onClick={() => router.push(`/board/write/${board.id}`)} > 수  정 </Button>
                                    <Button bgColor={"#ED64A6"} textColor={"white"} variant='solid' m={1} onClick={() => router.push("/board/list")} > 목  록 </Button>
                                    <Button bgColor={"#FEB2B2"} textColor={"white"} variant='solid' m={1} onClick={handleDelete} > 삭  제 </Button>
                                </Td>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Flex>
        </>
    )
}