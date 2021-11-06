interface cities {
    name: string,
    date: string,
    fips: number,
    lat: number,
    long: number,
    confirmed: number,
    deaths: number,
    confirmed_diff: number,
    deaths_diff: number,
    last_update: string
}
interface region {
    iso: string,
    name: string,
    province: string,
    lat: string,
    long: string,
    cities: Array<cities>
}
// export interface IReport {
//     date: string,
//     confirmed: number,
//     deaths: number,
//     recovered: 0,
//     confirmed_diff: number,
//     deaths_diff: number,
//     recovered_diff: number,
//     last_update: string,
//     active: number,
//     active_diff: number,
//     fatality_rate: number,
//     region: region
// }

// export interface Result {
//     current_page: number,
//     first_page_url: string,
//     last_page_url: string,
//     next_page_url: string,
//     prev_page_url: undefined,
//     per_page: number,
//     last_page: number,
//     from: number,
//     path: string,
//     to: number,
//     total: number,
//     data: Array<IReport>
// }

export interface IReport {
    date: string,
    last_updated: string,
    confirmed: number,
    confirmed_diff: number,
    deaths: number,
    deaths_diff: number,
    recovered: number,
    recovered_diff: number,
    active: number,
    active_diff: number,
    fatality_rate: number 
}
export interface Result {
    data: IReport
}