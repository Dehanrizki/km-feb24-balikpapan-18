// Chart Top Selling Product
const chartRevenueSellingProduct = document.getElementById(
    "chartRevenueSellingProduct"
  );
  new Chart(chartRevenueSellingProduct, {
    type: "bar",
    data: {
      labels: ["Sustainably Grown Organic Lg", "Dark chocolate Lg", "Latte Rg", "Cappuccino Lg", "Morning Sunrise Chai Lg"],
      datasets: [
        {
          data: [21151.75, 21006, 19112.25,17641.75, 17384],
          label: "Top Selling Product",
          backgroundColor: ["Yellow"],
          borderWidth: 3,
        },
      ],
    },
  });

// Total Sales by Location
const chartSalesLocation = document.getElementById(
    "chartSalesLocation"
  );
  new Chart(chartSalesLocation, {
    type: "bar",
    data: {
      labels: ["Lower Manhattan", "Hell's Kitchen", "Astoria"],
      datasets: [
        {
          data: [71.742, 71.373, 70.991],
          label: "Total Sales By Location",
          backgroundColor: ["Green", "Red", "Blue"],
          borderWidth: 3,
        },
      ],
    },
  });

// Total Quantity Product per Store
const chartQuantityLocate = document.getElementById(
    "chartQuantityLocate"
  );
  new Chart(chartQuantityLocate, {
    type: "bar",
    data: {
      labels: ["Coffee", "Tea", "Bakery", "Drinking"],
      datasets: [
        {
          data: [29.375, 22.709, 8.040, 5.434],
          label: "Total Quantity Product Per Store",
          backgroundColor: ["Green", "Red", "Blue", "Yellow"],
          borderWidth: 3,
        },
      ],
    },
  });

// Chart Revenue Product Category Per Store
const chartRevenueProduct = document.getElementById(
    "chartRevenueProduct"
  );
  new Chart(chartRevenueProduct, {
    type: "bar",
    data: {
      labels: ["Coffee", "Tea", "Bakery", "Drinking"],
      datasets: [
        {
          data: [91.223, 64.701, 27.387, 23.583],
          label: "Total Revenue Of Product Category Per Store",
          backgroundColor: ["Chocolate", "Yellow", "Blue", "Brown"],
          borderWidth: 3,
        },
      ],
    },
  });

// Chart top 1 Transacted product In Each Store
const chartTopOne = document.getElementById(
    "chartTopOne"
  );
  new Chart(chartTopOne, {
    type: "polarArea",
    data: {
      labels: ["Hell's Kitchen", "Astoria", "Lower Manhattan"],
      datasets: [
        {
          data: [1.854, 1.755, 1.582],
          label: "Top 1 Transacted Product In Each Store",
          backgroundColor: ["Red", "Green", "Blue"],
          borderWidth: 3,
        },
      ],
    },
  });