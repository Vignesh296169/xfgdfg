const chart2 = document.getElementById("mychart2").getContext("2d");

new Chart(chart2, {
  type: "line",
  data: {
    labels: [
      "2020 - Q1",
      "2020 - Q2",
      "2020 - Q3",
      "2020 - Q4",
      "2021 - Q1",
      "2021 - Q2",
      "2021 - Q3",
      "2021 - Q4",
      "2022 - Q1",
      "2022 - Q2",
      "2022 - Q3",
      "2022 - Q4",
      "2023 - Q1",
      "2023 - Q2",
    ],
    datasets: [
      {
        label: "chlorophyll-a",
        data: [
          0.29, 0.17, 0.07, 0.11, 0.2, 0.14, 0.1, 0.11, 0.15, 0.08, 0.03, 0.06,
          0.08, 0.07,
        ],
        borderWidth: 3,
        borderColor: "green",
        pointHoverRadius: 20,
        borderDash: [10, 5],
      },
      {
        label: "Turbidity",
        data: [
          0.28, 0.21, 0.08, 0.16, 0.21, 0.16, 0.13, 0.14, 0.18, 0.1, 0.07, 0.08,
          0.12, 0.1,
        ],
        borderWidth: 3,
        borderColor: "#F5A300",
        pointHoverRadius: 20,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "",
      },
      tooltip: {
        mode: "index",
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time frame",
        },
      },
      y: {
        title: {
          display: false,
          //   text: "Count",
        },
      },
    },
  },
});
