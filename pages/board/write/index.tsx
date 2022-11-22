import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { listType } from "../../../types";

export default function write() {

    const [board, setBoard] = useState<listType>(
        { id: 0, title: '', userId: '', content: '' }
    );

    // Router를 사용하여 id값 도출
    const router = useRouter();
    const id: number = Number(router.query.id);

    // onChagne에 대한 EventListener
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name: string = event.target.name;
        const value: string | number = event.target.value;
        setBoard({
            ...board,
            [name]: value
        })
    }

    // // 등록 onClick
    // const handleSubmit = () => {
    //     postBoard();
    //     router.push("/board/list");
    // }
    // const postBoard = async () => {////
    //     try {
    //         const response = await axios.post(`http://localhost:8000/data`, {
    //             title: board.title,
    //             userId: board.userId,
    //             content: board.content,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // 등록 onClick
    const handleSubmit = async () => {
        await axios.post(`http://localhost:8000/data`, {
                title: board.title,
                userId: board.userId,
                content: board.content,
            })
            .then(()=>router.push("/board/list"))
            .catch((err)=>console.error("handleSubmit ERROR : " + err));
    }
    
    return (
        <>
            <div>
                <h1>게시글 등록</h1>
                <div className="table">
                    <div className="dttr">
                        <span className="dt1">제목</span>
                        <span className="dt2"><input name="title" type="text" onChange={handleChange} /></span>
                    </div>
                    <div className="dttr">
                        <span className="dt1">작성자</span>
                        <span className="dt2"><input name="userId" type="text" onChange={handleChange} /></span>
                    </div>
                    <div className="dttr2">
                        <span className="dt1">내용</span>
                        <span className="dt2"><textarea name="content" onChange={handleChange}></textarea></span>
                    </div>
                </div>
                <button className="button" onClick={handleSubmit}>등록</button>
                <button className="button" onClick={() => router.push("/board/list")}>취소</button>
            </div>
        </>
    )
}