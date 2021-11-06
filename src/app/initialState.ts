import { IReport } from "../interfaces/ReportInterface";

export const initialStateReport = {
    status: 'idle',
    report: {} as IReport,
    error: null
}