import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { listType } from "../../../types";

export default function detail() {

    const [board, setBoard] = useState<listType>(
        { userId: '', id: 0, title: '', content: '' }
    );

    // Router를 사용하여 id값 도출
    const router = useRouter();
    const id: number = Number(router.query.id);

    const detail = async () => {
        const response = await axios.get(
            `http://localhost:8000/data/${id}`
        );
        return response
    }

    useEffect(() => {
        detail().then(res => setBoard(res.data))
    }, [id])

    // 수정페이지 이동
    const handleModify = () => {
        router.push(`/board/write/${id}`);
    }

    // 삭제후 목록으로 이동
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/data/${id}`);
            router.push("/board/list");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div>
                <h1>{board && board.title}</h1>
                <div className="table">
                    <div className="dttr">
                        <span className="dt1">No</span>
                        <span className="dt2">{board && board.id}</span>
                    </div>
                    <div className="dttr">
                        <span className="dt1">제목</span>
                        <span className="dt2">{board && board.title}</span>
                    </div>
                    <div className="dttr">
                        <span className="dt1">작성자</span>
                        <span className="dt2">{board && board.userId}</span>
                    </div>
                    <div className="dttr2">
                        <span className="dt1">내용</span>
                        <span className="dt2">{board && board.content}</span>
                    </div>
                </div>
                <button className="button" onClick={handleModify}>수정</button>
                <button className="button" onClick={handleDelete}>삭제</button>
                <button className="button" onClick={() => router.push("/board/list")}>목록</button>
            </div>
        </>
    )
}