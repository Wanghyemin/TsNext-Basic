import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { listType } from "../../types";
import { Box, Button, ButtonGroup } from '@chakra-ui/react'

export default function BoardList() {

  const [board, setBoard] = useState([]);

  // 게시판 목록 가져오기
  const list = async () => {
    await axios.get('http://localhost:8000/data')
      .then(res => setBoard(res.data));
  }
  useEffect(() => {
    list();
  },[]);

  // 페이지 이동시 사용할 라우터
  const router = useRouter();

  return (
    <>

      <h1>공지사항</h1>
      <div>
        <div>
          <Button bgColor={"#FEB2B2"} textColor={"white"} variant='solid' onClick={() => router.push("/board/write")} > 등  록 </Button>
          <h3>총  {board.length} 건</h3>
        </div>
        <div>
          <div>
            <span>번호</span>
            <span>제목</span>
            <span>내용</span>
            <span>작성자</span>
          </div>
        </div>
        <div>
          {board.map((content: listType, index:number) => (
            <div key={content.id} onClick={()=>router.push(`/board/detail/${content.id}`)}>
              <span>{index+1}</span>
              <span>{content.title}</span>
              <span>{content.content}</span>
              <span>{content.userId}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}