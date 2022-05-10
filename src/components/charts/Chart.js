import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar.js';

function Chart(props){
    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                ></ChartBar>
            ))} 
        </div>
    );
}
export default Chart;
