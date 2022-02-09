import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

// Trying to learn a new way of writing functions in javascript as mentioned below :
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // Here the spread operator (...) is used to transform the array into comma seperated values which can be input to the max() function
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
