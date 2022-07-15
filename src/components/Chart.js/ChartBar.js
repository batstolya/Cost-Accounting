import React from "react";
import './ChartBar.css'


const ChartBar = (props) => {
let barFillHight ='0%';

if(props.maxValue > 0) {
    barFillHight = Math.round((props.value/props.maxValue)*100) + "%";
}

    // let someValue = Math.round((props.value)*12/ 100) + "%"
    // console.log(someValue)

// console.log(props.value)
    return (
   <div className="chart-bar">
       <div className="chart-bar__inner">
           <div className="chart-bar__fill" style={{height: barFillHight}}></div>
       </div>
       <div className="chart-bar__label">{props.label}</div>
   </div>
  );
};

export default ChartBar;
