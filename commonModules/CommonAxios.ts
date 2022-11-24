import axios from 'axios'

const commonAxios = axios.create({
	baseURL: "http://localhost:8000",
    headers: {  "Content-Type": `application/json` },
	timeout: 1000
})

commonAxios.interceptors.request.use(
	function (config) {
        console.log("저는 공통모듈 commonAxios입니다.")
		return config
	},
	function (error) {
        console.log("ERROR : " + error)
		return Promise.reject(error);
	}
)

export default commonAxios;