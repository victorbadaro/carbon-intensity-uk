import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import api from '../../services/api';

import './styles.css';

export default function Home() {
    const [chartData, setChartData] = useState({});

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await api.get('intensity');
    //         const data = response.data;

    //         setData(data);
    //     }

    //     fetchData();
    // }, []);

    function handlePeriod() {
        setChartData({
            // labels: ['June', 'July', 'September'],
            labels: ['January/2016', 'February/2016', 'March/2016'],
            datasets: [{
                backgroundColor: 'rgb(106,168,79)',
                borderColor: 'rgb(106,168,79)',
                data: [
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100)
                ]
            }]
        });
    }

    return (
        <div className="chart">
            <div className="chart-buttons">
                <button onClick={() => handlePeriod()}>Period</button>
            </div>
            <Bar
                data={chartData}
                legend={{
                    display: false
                }}
                options={{
                    title: {
                        display: true,
                        text: 'Carbon Intesity UK',
                        fontSize: 25,
                        padding: 24
                    }
                }}
                width={50}
                height={25}
            />
            {console.log(chartData)}
        </div>
    );
}