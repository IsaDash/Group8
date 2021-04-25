import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'At least one dose',
      data: ['5000', '800000', '2100000', '2400000'],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
    {
        label: 'Fully Vaccinated',
        data: ['3000', '2500000', '35000000', '45000000'],
        fill: false,
        backgroundColor: 'rgb(255, 125, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        stack:true
      },
    ],
  },
  plugins: {
    title: {
        display: true,
        text: 'Vaccination over time'
    }
},
  
};

function LineChart(){

    // const[lineData, setLineData] = useState([]);

    useEffect(()=>{
        /*
        1. set API call to retrieve data and once data is retrieved 
        2. use setLineData to populate lineData
        */
    //    data["datasets"]["data"] = lineData;
    });

    return(
        <>
        <div className='header'>
        <h1 className='title'>COVID-19 Vaccine Tracker</h1>
        </div>
        <Line data={data} options={options} />
    </>
    );

}


export default LineChart;