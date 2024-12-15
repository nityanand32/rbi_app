import React, { useState } from "react";
import Plot from "react-plotly.js";

const PopulationChart = () => {
  const [chartType, setChartType] = useState("line"); // Options: 'line', 'bar', 'heatmap'

  const years = ["1951", "1961", "1971", "1981", "1991", "2001", "2011"];
  const statesData = {
    "Andaman & Nicobar Islands": [31, 64, 115, 189, 281, 356, 381],
    "Andhra Pradesh": [31115, 35983, 43503, 53551, 66508, 76210, 84581],
    "Arunachal Pradesh": [0, 337, 468, 632, 865, 1098, 1384],
    "Assam": [8029, 10837, 14625, 18041, 22414, 26656, 31206],
    "Bihar": [29085, 34841, 42126, 52303, 64531, 82999, 104099],
    "Chandigarh": [24, 120, 257, 452, 642, 901, 1055],
    "Chhattisgarh": [7457, 9154, 11637, 14010, 17615, 20834, 25545],
    "Dadra & Nagar Haveli": [42, 58, 74, 104, 138, 220, 344],
    "Daman & Diu": [49, 37, 63, 79, 102, 158, 243],
    "Delhi": [1744, 2659, 4066, 6220, 9421, 13851, 16788],
    "Goa": [547, 590, 795, 1008, 1170, 1348, 1459],
    "Gujarat": [16263, 20633, 26697, 34086, 41310, 50671, 60440],
    "Haryana": [5674, 7591, 10036, 12922, 16464, 21145, 25351],
    "Himachal Pradesh": [2386, 2812, 3460, 4281, 5171, 6078, 6865],
    "Jammu & Kashmir": [3254, 3561, 4617, 5987, 7837, 10144, 12541],
    "Jharkhand": [9697, 11606, 14227, 17612, 21844, 26946, 32988],
    "Karnataka": [19402, 23587, 29299, 37136, 44977, 52851, 61095],
    "Kerala": [13549, 16904, 21347, 25454, 29099, 31841, 33406],
    "Lakshadweep": [21, 24, 32, 40, 52, 61, 64],
    "Madhya Pradesh": [18615, 23218, 30017, 38169, 48566, 60348, 72627],
    "Maharashtra": [32003, 39554, 50412, 62783, 78937, 96879, 112374],
    "Manipur": [578, 780, 1073, 1421, 1837, 2294, 2856],
    "Meghalaya": [606, 769, 1012, 1336, 1775, 2319, 2967],
    "Mizoram": [196, 266, 332, 494, 690, 889, 1097],
    "Nagaland": [213, 369, 516, 775, 1210, 1990, 1979],
    "Odisha": [14646, 17549, 21945, 26370, 31660, 36805, 41974],
    "Puducherry": [317, 369, 472, 604, 808, 974, 1248],
    "Punjab": [9161, 11135, 13551, 16789, 20282, 24359, 27743],
    "Rajasthan": [15971, 20156, 25766, 34262, 44006, 56507, 68548],
    "Sikkim": [138, 162, 210, 316, 406, 541, 611],
    "Tamil Nadu": [30119, 33687, 41199, 48408, 55859, 62406, 72147],
    "Tripura": [639, 1142, 1556, 2053, 2757, 3199, 3674],
    "Uttar Pradesh": [60274, 70144, 83849, 105137, 132062, 166198, 199812],
    "Uttarakhand": [2946, 3611, 4493, 5726, 7051, 8489, 10086],
    "West Bengal": [26300, 34926, 44312, 54581, 68078, 80176, 91276],
  };

  const states = Object.keys(statesData);
  const population = states.map((state) => statesData[state]);

  const traces = states.map((state, idx) => ({
    x: years,
    y: statesData[state],
    name: state,
    type: chartType === "bar" ? "bar" : "scatter",
    mode: chartType === "line" ? "lines+markers" : undefined,
  }));

  const renderChart = () => {
    if (chartType === "heatmap") {
      return (
        <Plot
          data={[
            {
              z: population,
              x: years,
              y: states,
              type: "heatmap",
              colorscale: "Viridis",
            },
          ]}
          layout={{
            title: "Population Heatmap",
            xaxis: { title: "Year" },
            yaxis: { title: "State" },
          }}
          config={{ responsive: true }}
        />
      );
    } else {
      return (
        <Plot
          data={traces}
          layout={{
            title:
              chartType === "line"
                ? "State-wise Population Growth Over Decades"
                : "State-wise Population Comparison by Year",
            xaxis: { title: "Year" },
            yaxis: { title: "Population (in thousands)" },
            barmode: chartType === "bar" ? "group" : undefined,
          }}
          config={{ responsive: true }}
        />
      );
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setChartType("line")}>Line Chart</button>
        <button onClick={() => setChartType("bar")}>Bar Chart</button>
        <button onClick={() => setChartType("heatmap")}>Heatmap</button>
      </div>
      {renderChart()}
    </div>
  );
};

export default PopulationChart;
