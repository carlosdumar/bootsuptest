import React, { useEffect } from 'react'
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from 'react-redux'
import { fetchReports, selectReports } from '../features/reportsSlice';



const Home: React.FC = () => {
    const dispatch = useDispatch()    
    const data = useSelector(selectReports)
    let carlos = []
    console.log('data', data)
    data.map((item:any) => {
        carlos.push([item.deaths, item.region.province])
    })
    console.log('carlos', carlos)
    useEffect(() => {
        dispatch(fetchReports(''))
    }, [dispatch])    

    return (
        <div>
           <Chart
            width={'500px'}
            height={'300px'}
            chartType="Histogram"
            loader={<div>Loading Chart</div>}
            data={[carlos]} 
           />    
        </div>
    )
}

export default Home