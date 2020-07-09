import React from "react";
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
  datasets: [
    {
      label: 'Income ₦ | Year',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1000, 1170, 660, 1030, 1456, 1955, 2240]
    }
  ]
};

class Uchart extends React.Component {
    render() {
        return (
            <div className="uchart">
                <Line data={data}
                width={100}
                height={100}
                options={{ maintainAspectRatio: false }} />
            </div>
        );
    }
}
export default Uchart;