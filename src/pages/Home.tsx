import React, { useEffect } from 'react'
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from 'react-redux'
import { fetchReports, selectReports } from '../features/reportsSlice';



const Home: React.FC = () => {
    const dispatch = useDispatch()    
    const data = useSelector(selectReports)
    let dataChart:any = [] 
    
    data.map(item => (
        dataChart.push(item.confirmed, item.deaths)
    ))
    
    useEffect(() => {
        dispatch(fetchReports(''))
    }, [dispatch])    

    return (
        <div>
           <Chart
            width={'500px'}
            height={'500px'}
            chartType="Histogram"
            loader={<div>Loading Chart</div>}
            data={[['Confirmed Cases', 'Deaths'], dataChart]} 
            options={{
                title: 'Covid-2019 cases in US',
                hAxis: {
                    title: 'US',
                },
                vAxis: {
                    title: 'Deaths/Confirmed Cases',
                },
            }}
            
           />    
        </div>
    )
}

export default Home