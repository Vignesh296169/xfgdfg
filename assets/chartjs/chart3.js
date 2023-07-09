const chart3 = document.getElementById("mychart3").getContext("2d");
// let delayed;

new Chart(chart3, {
  type: "line",
  data: {
    labels: [
      "Q1:2020",
      "Q1:2019",
      "Q1:2019",
      "Q1:2019",
      "Q1:2019",
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
        label: "Ulsoor Lake",
        data: [
          0.1989444444, 0.1082777778, 0.02994444444, 0.064, 0.2346666667,
          0.1315263158, 0.05310526316, 0.1575, 0.1920555556, 0.1211111111,
          0.06015789474, 0.1004375, 0.1336111111, 0.05694736842, 0.04236842105,
          0.05494444444, 0.09277777778, 0.06427777778,
        ],
        borderWidth: 3,
        borderColor: "green",
        pointHoverRadius: 20,
      },
      {
        label: "Varthur Lake",
        data: [
          0.2370555556, 0.1073333333, 0.0285, 0.05968421053, 0.1709444444,
          0.071, 0.03242105263, 0.08811111111, -0.0185, -0.02666666667,
          0.02842105263, 0.07025, 0.06027777778, 0.02673684211, 0.02142105263,
          0.02811111111, -0.003222222222, -0.01308333333,
        ],
        borderWidth: 3,
        borderColor: "red",
        pointHoverRadius: 20,
        borderDash: [10, 5],
      },
      {
        label: "Yelehanka Lake",
        data: [
          0.2252222222, 0.1075555556, 0.02522222222, 0.1080526316, 0.1835555556,
          0.1006315789, 0.04168421053, 0.1138333333, 0.259, 0.1219444444,
          0.06705263158, 0.106, 0.1213333333, 0.05368421053, 0.02810526316,
          0.03888888889, 0.04855555556, 0.04325,
        ],
        borderWidth: 3,
        borderColor: "blue",
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
          text: "Mean",
        },
      },
    },
  },
});
