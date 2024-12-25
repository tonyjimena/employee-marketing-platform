import axios from "axios"
import {CreateAxiosDefaults} from "axios"
import {Env} from "@/constants/Env"

const AXIOS_CONFIG: CreateAxiosDefaults = {
    baseURL: Env.VITE_API_BASE_URL,
    timeout: 1000,
}

const fetcher = axios.create(AXIOS_CONFIG)

export default fetcher
