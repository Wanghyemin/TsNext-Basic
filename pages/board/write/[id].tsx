import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { listType } from "../../../types";

export default function modify() {

  const [board, setBoard] = useState<listType>(
    { id: 0, title: '', userId: '', content: '' }
  );

  // Router를 사용하여 id값 도출
  const router = useRouter();
  const id: number = Number(router.query.id);

  const detail = async () => {
    await axios.get(`http://localhost:8000/data/${id}`)
      .then(res => setBoard(res.data))
  }

  useEffect(() => {
    detail();
  }, [])

  // onChagne에 대한 EventListener
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name: string = event.target.name;
    const value: string | number = event.target.value;
    setBoard({
      ...board,
      [name]: value
    })
  }
  // 수정 onClick
  const handleSubmit = async () => {
    const response = await axios.put(`http://localhost:8000/data/${id}`, {
      title: board.title,
      userId: board.userId,
      content: board.content,
    })
      .then(() => router.push("/board/list"))
      .catch(error => console.error(error))

  }

  return (
    <>
      <div>
        <h1>게시글 수정</h1>
        <div className="table">
          <div className="dttr">
            <span className="dt1">No</span>
            <span className="dt2">{board && board.id}</span>
          </div>
          <div className="dttr">
            <span className="dt1">제목</span>
            <span className="dt2"><input name="title" type="text" value={board && board.title} onChange={handleChange} /></span>
          </div>
          <div className="dttr">
            <span className="dt1">작성자</span>
            <span className="dt2"><input name="userId" type="text" value={board && board.userId} onChange={handleChange} /></span>
          </div>
          <div className="dttr2">
            <span className="dt1">내용</span>
            <span className="dt2"><textarea name="content" value={board && board.content} onChange={handleChange}></textarea></span>
          </div>
        </div>
        <button className="button" onClick={handleSubmit}>수정</button>
        <button className="button" onClick={() => router.push("/board/list")}>목록</button>
      </div>
    </>
  )
}