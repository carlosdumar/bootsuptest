import { AxiosPromise } from "axios";
import { Result } from '../interfaces/ReportInterface'
import http from './config'

const getReport = (url: string | ''): AxiosPromise<Result> => {
    return http.get(url)
}

export default {
    getReport
}