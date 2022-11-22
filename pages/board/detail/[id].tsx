import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { listType } from "../../../types";

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
                <div className="table">
                    <div className="dttr">
                        <span className="dt1">No</span>
                        <span className="dt2">{board.id}</span>
                    </div>
                    <div className="dttr">
                        <span className="dt1">제목</span>
                        <span className="dt2">{board.title}</span>
                    </div>
                    <div className="dttr">
                        <span className="dt1">작성자</span>
                        <span className="dt2">{board.userId}</span>
                    </div>
                    <div className="dttr2">
                        <span className="dt1">내용</span>
                        <span className="dt2">{board.content}</span>
                    </div>
                </div>
                <button className="button" onClick={()=>router.push(`/board/write/${board.id}`)}>수정</button>
                <button className="button" onClick={handleDelete}>삭제</button>
                <button className="button" onClick={()=>router.push("/board/list")}>목록</button>
            </div>
        </>
    )
}