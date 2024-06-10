const barChart = document.getElementById("barChart");

new Chart(barChart, {
  type: "bar",
  data: {
    labels: ["Astoria", "Lower Manhattan", "Hell's Kitchen"],
    datasets: [
      {
        label: "Store",
        data: [236.511, 232.244, 230.057],
        backgroundColor: [
          "rgba(41, 155, 99 ,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
