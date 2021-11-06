import axios from 'axios'

const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    "Accept-Language": "es"
}

export default axios.create({
    baseURL: 'https://covid-api.com/api/reports/total?iso=USA',
    responseType: 'json',
    headers
})