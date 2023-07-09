const chart1 = document.getElementById("mychart1").getContext("2d");
let delayed;

new Chart(chart1, {
  type: "line",
  data: {
    labels: [
      "Q1:2019",
      "Q2:2019",
      "Q3:2019",
      "Q4:2019",
      "Q1:2020",
      "Q2:2020",
      "Q3:2020",
      "Q4:2020",
      "Q1:2021",
      "Q2:2021",
      "Q3:2021",
      "Q4:2021",
      "Q1:2022",
      "Q2:2022",
      "Q3:2022",
      "Q4:2022",
      "Q1:2023",
      "Q2:2023",
    ],
    datasets: [
      {
        label: "Percentage",
        data: [
          0, -45.57, -72.34, 113.73, 266.67, -43.95, -59.62, 196.58, 21.94,
          -36.94, -50.33, 66.96, 33.03, -57.38, -25.6, 29.68, 68.86, -30.72,
        ],
        borderWidth: 3,
        borderColor: "Purple",
        pointHoverRadius: 20,
        // borderDash: [10, 5],
      },
      {
        label: "mean",
        data: [
          0.198944444, 0.108277778, 0.029944444, 0.064, 0.234666667,
          0.131526316, 0.053105263, 0.1575, 0.192055556, 0.121111111,
          0.060157895, 0.1004375, 0.133611111, 0.056947368, 0.042368421,
          0.054944444, 0.092777778, 0.064277778,
        ],
        borderWidth: 3,
        borderColor: "Lime",
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
          display: true,
          text: "Percentage",
        },
      },
    },
  },
});
