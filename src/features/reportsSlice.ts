import { createSlice, Dispatch, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { initialStateReport as initialState } from "../app/initialState";
import {  Result } from '../interfaces/ReportInterface';
import ReportService from '../services/ReportService'
import type { RootState } from '../app/store'

export const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        reportLoading(state) {            
            state.status = 'loading'
        },
        reportLoaded(state, action: PayloadAction<Result>) {
            console.log('action.payload', action.payload.data)
            state.report = action.payload
            state.status = 'succeeded'
        },
        reportFailure(state, action: PayloadAction<any>) {
            const { error } = action.payload
            state.status = 'failed'
            state.error = error
        }

    },
    extraReducers: {
        // Extra reducers comes here
    }
})

export const { reportLoading, reportLoaded, reportFailure} = reportsSlice.actions
export default reportsSlice.reducer

export const fetchReports = (type: string | '') => {
    return async (dispatch: Dispatch) => {
        dispatch(reportLoading())

        try {
            const response = await ReportService.getReport(type)
            dispatch(reportLoaded(response.data))
        } catch (error) {
            dispatch(reportFailure(error))
        }
    }
}


export const selectAllReports = (state:RootState) => state.reports.report

export const selectReports = createSelector(selectAllReports, report => Object.values(report))
