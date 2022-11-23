import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { listType } from "../../../types";
import { Box, Button, ButtonGroup } from '@chakra-ui/react'

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
            .then(()=>router.push("/board/list"))
            .catch((err)=>console.error(err));
    }

    return (
        <>
            <div>
                <h1>{board.title||"해당 게시글이 없습니다."}</h1>
                <div>
                    <div>
                        <span>No</span>
                        <span>{board.id}</span>
                    </div>
                    <div>
                        <span>제목</span>
                        <span>{board.title}</span>
                    </div>
                    <div>
                        <span>작성자</span>
                        <span>{board.userId}</span>
                    </div>
                    <div>
                        <span>내용</span>
                        <span>{board.content}</span>
                    </div>
                </div>
                <Button bgColor={"#FEB2B2"} textColor={"white"} variant='solid' m={1} onClick={()=>router.push(`/board/write/${board.id}`)} > 수  정 </Button>
                <Button bgColor={"#ED64A6"} textColor={"white"} variant='solid' m={1} onClick={() => router.push("/board/list")} > 목  록 </Button>
                <Button bgColor={"#FEB2B2"} textColor={"white"} variant='solid' m={1} onClick={handleDelete} > 삭  제 </Button>
            </div>
        </>
    )
}