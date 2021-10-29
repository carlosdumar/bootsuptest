import axios from 'axios'

const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    "Accept-Language": "es"
}

export default axios.create({
    baseURL: 'https://covid-api.com/api/reports?iso=USA&region_name=US&per_page=20',
    responseType: 'json',
    headers
})