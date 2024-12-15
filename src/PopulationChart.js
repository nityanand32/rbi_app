import React from "react";
import Plot from "react-plotly.js";

const PopulationChart = () => {
  // Data from the PDF
  const years = ["1951", "1961", "1971", "1981", "1991", "2001", "2011"];
  const statesData = {
    "Andaman & Nicobar Islands": [31, 64, 115, 189, 281, 356, 381],
    "Andhra Pradesh": [31115, 35983, 43503, 53551, 66508, 76210, 84581],
    "Arunachal Pradesh": [0, 337, 468, 632, 865, 1098, 1384],
    "Assam": [8029, 10837, 14625, 18041, 22414, 26656, 31206],
    "Bihar": [29085, 34841, 42126, 52303, 64531, 82999, 104099],
    // Add more states here
  };

  // Prepare traces for Plotly
  const traces = Object.keys(statesData).map((state) => ({
    x: years,
    y: statesData[state],
    name: state,
    type: "scatter",
    mode: "lines",
    fill: "tonexty",
  }));

  return (
    <Plot
      data={traces}
      layout={{
        title: "State-wise Population Growth Over Decades",
        xaxis: { title: "Year" },
        yaxis: { title: "Population (in thousands)" },
        legend: { orientation: "h" },
        autosize: true,
      }}
      useResizeHandler={true}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default PopulationChart;
