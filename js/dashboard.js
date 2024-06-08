document.addEventListener("DOMContentLoaded", () => {
  // Handle Modal
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("myBtn");
  const span = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

const chartSales = document.getElementById("chartSales");
const rendercoffeeShopSales = (labels, data) => {
  new Chart(chartSales, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Total Monthly Revenue",
          data: data,
          borderWidth: 2,
        },
      ],
    },
  });
};

// Render (nanti akan sinkron dengan json)
fetch("../data/coffeeShopSales.json")
  .then((Response) => Response.json())
  .then((Response) => {
    let data = Response.datasets[0];
    rendercoffeeShopSales(data.labels, data.data);
  });

// Chart Revenue Per Location
const chartRevenuePerLocation = document.getElementById(
  "chartRevenuePerLocation"
);
const renderrevenuePerLocation = (label, data) => {};
new Chart(chartRevenuePerLocation, {
  type: "bar",
  data: {
    labels: ["Astoria", "Lower Manhattan", "Hell's Kitchen"],
    datasets: [
      {
        data: [232243.91, 230057.25, 236511.17],
        label: "Total Revenue Each Location",
        backgroundColor: ["Green", "yellow", "red"],
        borderWidth: 3,
      },
    ],
  },
});

// Bar Chart (Transaction Quantity Product)
const chartTransactionProduct = document.getElementById(
  "chartTransactionProduct"
);
new Chart(chartTransactionProduct, {
  type: "bar",
  data: {
    labels: ["Bakery", "Branded", "Coffee", "Coffee Beans", "Drinking Chocolate", "Flavours", "Loose Tea", "Package Chocolate", "Tea"],
    datasets: [
      {
        data: [23214, 776, 89250, 1828, 17457, 10511, 1210, 487, 69737],
        label: "Transaction Quantity Of Product Category",
        backgroundColor: ["chocolate", "green", "white", "Blue"],
        borderWidth: 3,
      },
    ],
  },
});

