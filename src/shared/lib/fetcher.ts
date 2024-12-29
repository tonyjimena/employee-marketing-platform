import axios from "axios"
import {CreateAxiosDefaults} from "axios"
import {Env} from "@/constants/Env"
import {CustomError} from "../errors/types"

const AXIOS_CONFIG: CreateAxiosDefaults = {
	baseURL: Env.VITE_API_BASE_URL
}

const fetcher = axios.create(AXIOS_CONFIG)

fetcher.interceptors.response.use(
	(response) => response.data,
	(error) => {
		console.error("fetcher error ->", error)

		// if (error.response?.status === 404) {
		// 	throw new Error("Not found")
		// }

		throw new CustomError(error.response.data.error, error.response?.status)
	}
)

export default fetcher
