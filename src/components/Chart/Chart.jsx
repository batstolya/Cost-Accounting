import React from "react";
import './Chart.css'

import ChartBar from "./ChartBar";

const Chart = (props) => {
const valueArr = props.datePoints.map(item => item.value)
    const totalMaximum = Math.max(...valueArr)

  return (
    <div className="chart">
      {props.datePoints.map((datePoint) => (
        <ChartBar
          key={datePoint.label}
          value={datePoint.value}
          maxValue={totalMaximum}
          label={datePoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
