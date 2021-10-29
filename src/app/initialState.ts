import { Result } from "../interfaces/ReportInterface";

export const initialStateReport = {
    status: 'idle',
    report: {} as Result,
    error: null
}