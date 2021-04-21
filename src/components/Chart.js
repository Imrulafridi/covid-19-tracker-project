import React, { useContext } from "react";
import { Bar, Line } from "react-chartjs-2";
import { GlobalContext } from "../context/GlobalContext";

const Chart = () => {
  const { apidata, country } = useContext(GlobalContext);

  const barChart = apidata ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              apidata.confirmed.value,
              apidata.recovered.value,
              apidata.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  const lineChart = apidata ? (
    <Line
      data={{
        datasets: [
          {
            data: [0, apidata.confirmed.value],
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: [0, apidata.recovered.value],
            label: "Recovered",
            borderColor: "rgba(0, 255, 0, 0.8)",
            backgroundColor: "rgba(0, 255, 0, 0.3)",
            fill: true,
          },
          {
            data: [0, apidata.deaths.value],
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "#ff9999",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className="chartContainer">{country ? barChart : lineChart}</div>;
};

export default Chart;
