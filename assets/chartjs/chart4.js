const ctx3 = document.getElementById('myChart3');

let changeColor = new Chart(ctx3, {
  type: 'line', // Change the type to 'line'
  data: {
    labels: [
      "Q1 :2020",
      "Q2 :2020",
      "Q3 :2020",
      "Q4 :2020",
      "Q1 :2021",
      "Q2 :2021",
      "Q3 :2021",
      "Q4 :2021",
      "Q1 :2022",
      "Q2 :2022",
      "Q3 :2022",
      "Q4 :2022",
      "Q1 :2023",
      "Q2 :2023",
    ],
    datasets: [{
      label: 'chlorophyll-a %',
      data: [
        -41,
        -59,
        114,
        33,
        -30,
        -29,
        10,
        36,
        -47,
        -63,
        100,
        33,
        -13,
      ],
      borderColor: 'blue',
      borderWidth: 5,
      fill: false, 
      pointBackgroundColor: 'orange',
      pointRadius: 6, 
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time Frame'
        },
        ticks: {
          font: {
            size: 9,
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Percentage'
        },
        ticks: {
          font: {
            size: 9,
          }
        }
      }
    }
    
  }
});
