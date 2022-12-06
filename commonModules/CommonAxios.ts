import { listType } from '../types';
import axios from 'axios'

// 게시판 목록 Get
export const getBoardListAxios = async() => {
	const {data} = await axios.get('http://localhost:8000/data');
	return data;
}
// 게시판 상세페이지 Get
export const  getBoardDetailAxios = async(id:number) => {
	const {data} = await axios.get(`http://localhost:8000/data/${id}`)
	return data;
}

// 게시판 등록 Post
export const postBoardDetailAxios = async(boardDetail:listType) => {
	await axios
		.post(`http://localhost:8000/data`,{
			title: boardDetail.title,
			userId: boardDetail.userId,
			content: boardDetail.content,
			adress1: boardDetail.adress1,
			adress2: boardDetail.adress2,
			adress3: boardDetail.adress3,
			regDt : boardDetail.regDt,
			fileName : boardDetail.fileName
		})
}

// 게시판 상세페이지 삭제 Delete
export const delBoardDetailAxios = async(id:number) => {
	await axios.delete(`http://localhost:8000/data/${id}`);
}

// 게시판 상세페이지 수정 Put
export const putBoardDetailAxios = async(boardDetail:listType) => {
	await axios.put(`http://localhost:8000/data/${boardDetail.id}`,{
		title: boardDetail.title,
		userId: boardDetail.userId,
		content: boardDetail.content,
		adress1: boardDetail.adress1,
		adress2: boardDetail.adress2,
		adress3: boardDetail.adress3,
		regDt : boardDetail.regDt,
		fileName : boardDetail.fileName
	})
}
