const storeFilter = document.getElementById("storeFilter");
const monthFilter = document.getElementById("monthFilter");

const data = {
  "Lower Manhattan": {
    Januari: {
      topTransactions: {
        labels: [
          "Latte Rg",
          "Ethiopia Sm",
          "Columbian Medium Roast Rg",
          "Morning Sunrise Chai Rg",
          "Earl Grey Lg",
        ],
        data: [203, 194, 193, 185, 184],
      },
      topSelling: {
        labels: [
          "Latte Rg",
          "Dark chocolate Lg",
          "Sustainably Grown Organic Lg",
          "Cappuccino",
          "Brazilian Lg",
        ],
        data: [862.75, 742.5, 688.75, 633.75, 626.5],
      },
      revenuePerLocation: 26544.0,
      monthlyRevenue: 26543.43,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [3414, 2540, 942, 608, 569, 70, 47, 41, 18],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          10355.65, 7145.4, 3315.05, 2513.75, 1367.8, 846.0, 455.2, 377.0,
          167.58,
        ],
      },
      totalSales: 8249,
    },
    Februari: {
      topTransactions: {
        labels: [
          "Latte",
          "Peppermint Lg",
          "Ethiopia Rg",
          "Peppermint Rg",
          "Earl Grey Lg",
        ],
        data: [198, 188, 180, 177, 177],
      },
      topSelling: {
        labels: [
          "Latte",
          "Dark chocolate Lg",
          "Sustainably Grown Organic Lg",
          "Cappuccino",
          "Brazilian Lg",
        ],
        data: [742.5, 738.0, 667.25, 648.0, 646.0],
      },
      revenuePerLocation: 5321.0,
      monthlyRevenue: 25320.05,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [3174, 2562, 891, 592, 507, 60, 50, 35, 24],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          9598.85, 7216.85, 3114.72, 2443.75, 1334.3, 528.0, 468.4, 405.6,
          209.58,
        ],
      },
      totalSales: 7895,
    },
    Maret: {
      topTransactions: {
        labels: [
          "Sustainably Grown Organic Rg",
          "English Breakfast Rg",
          "Earl Grey Lg",
          "Serenity Green Tea Rg",
          "Jamaican Coffee River Lg,",
        ],
        data: [241, 229, 228, 225, 223],
      },
      topSelling: {
        labels: [
          "Sustainably Grown Organic Lg",
          "Dark chocolate Lg",
          "Sustainably Grown Organic Rg",
          "Latte Rg",
          "Cappuccino Lg",
        ],
        data: [1011.75, 963.0, 903.75, 884.0, 837.25],
      },
      revenuePerLocation: 32889.0,
      monthlyRevenue: 32888.68,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [4117, 3251, 1147, 847, 641, 75, 58, 50, 23],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          12539.45, 9137.1, 4053.38, 3505.0, 1591.85, 810.0, 542.85, 512.8,
          196.25,
        ],
      },
      totalSales: 10209,
    },
    April: {
      topTransactions: {
        labels: [
          "Peppermint Lg",
          "English Breakfast Rg",
          "Ethiopia Rg",
          "Morning Sunrise Chai Rg",
          "Our Old Time Diner Blend Rg",
        ],
        data: [300, 287, 275, 273, 264],
      },
      topSelling: {
        labels: [
          "Dark chocolate Lg",
          "Latte Rg",
          "Sustainably Grown Organic Lg",
          "Latte",
          "Morning Sunrise Chai Lg",
        ],
        data: [1129.5, 1109.25, 1007.0, 971.25, 964.0],
      },
      revenuePerLocation: 39160.0,
      monthlyRevenue: 39159.33,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [5022, 3908, 1386, 873, 808, 94, 66, 58],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          15179.05, 10994.0, 4886.25, 3625.75, 1907.3, 1068.0, 646.4, 540.75,
          311.83,
        ],
      },
      totalSales: 12249,
    },
    Mei: {
      topTransactions: {
        labels: [
          "Peppermint Rg",
          "Jamaican Coffee River Lg",
          "Earl Grey Rg",
          "Cappuccino Lg",
          "Jamaican Coffee River Sm",
        ],
        data: [357, 354, 348, 346, 343],
      },
      topSelling: {
        labels: [
          "Sustainably Grown Organic Lg",
          "Cappuccino Lg",
          "Latte Rg",
          "Dark chocolate Lg",
          "Jamaican Coffee River Lg",
        ],
        data: [1477.25, 1470.5, 1445.0, 1431.0, 1327.5],
      },
      revenuePerLocation: 51701.0,
      monthlyRevenue: 51700.07,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [6574, 5178, 1799, 1247, 1064, 114, 81, 77, 41],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          19957.45, 14571.0, 6352.02, 5155.0, 2405.35, 1334.0, 851.2, 717.15,
          356.9,
        ],
      },
      totalSales: 16175,
    },
    Juni: {
      topTransactions: {
        labels: [
          "Columbian Medium Roast Rg",
          "Ethiopia Rg",
          "Our Old Time Diner Blend Rg",
          "Columbian Medium Roast Lg",
          "English Breakfast Rg",
        ],
        data: [383, 378, 365, 365, 364],
      },
      topSelling: {
        labels: [
          "Dark chocolate Lg",
          "Sustainably Grown Organic Lg",
          "Latte Rg",
          "Cappuccino Lg",
          "Latte",
        ],
        data: [1570.5, 1482.0, 1474.75, 1462.0, 1365.0],
      },
      revenuePerLocation: 54446.0,
      monthlyRevenue: 54445.69,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [7074, 5270, 1875, 1267, 1120, 123, 99, 97, 40],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          21355.05, 14800.4, 6607.52, 5251.25, 2624.35, 1622.0, 912.1, 896.0,
          377.02,
        ],
      },
      totalSales: 16965,
    },
  },
  "Hell's Kitchen": {
    Januari: {
      topTransactions: {
        labels: [
          "Ouro Brasileiro shot",
          "Serenity Green Tea Rg",
          "Brazilian Lg",
          "Morning Sunrise Chai Rg",
          "Brazilian Sm",
        ],
        data: [226, 211, 196, 188, 184],
      },
      topSelling: {
        labels: [
          "Civet Cat",
          "Sustainably Grown Organic Lg",
          "Dark chocolate Lg",
          "Brazilian Lg",
          "Latte Rg",
        ],
        data: [1215, 850.25, 792, 686, 675.75],
      },
      revenuePerLocation: 27821.0,
      monthlyRevenue: 27820.65,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [3506, 2733, 876, 650, 378, 105, 57, 24, 11],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          10514.4, 7648.6, 3118.2, 2713.75, 2616.15, 520.9, 302.4, 200.25,
          186.0,
        ],
      },
      totalSales: 8340,
    },
    Februari: {
      topTransactions: {
        labels: [
          "Ouro Brasileiro shot",
          "Morning Sunrise Chai Rg",
          "Serenity Green Tea Rg",
          "Earl Grey Rg",
          "Ethiopia Lg",
        ],
        data: [225, 193, 185, 185, 181],
      },
      topSelling: {
        labels: [
          "Sustainably Grown Organic Lg",
          "Dark chocolate Lg",
          "Latte Rg",
          "Ethiopia Lg",
          "Ouro Brasileiro shot",
        ],
        data: [840.75, 729, 692.75, 633.5, 623.7],
      },
      revenuePerLocation: 25720.0,
      monthlyRevenue: 25719.8,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [3313, 2575, 839, 648, 400, 82, 50, 16, 14],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          9944.35, 7213.4, 2998.6, 2692.75, 1709.0, 466.65, 320.0, 232.0,
          143.05,
        ],
      },
      totalSales: 7937,
    },
    Maret: {
      topTransactions: {
        labels: [
          "Ouro Brasileiro shot",
          "Morning Sunrise Chai Rg",
          "Brazilian Sm",
          "Ethiopia Lg",
          "Cappuccino",
        ],
        data: [265, 239, 230, 227, 224],
      },
      topSelling: {
        labels: [
          "Sustainably Grown Organic Lg",
          "Dark chocolate Lg",
          "Latte Rg",
          "Cappuccino",
          "Morning Sunrise Chai Lg",
        ],
        data: [1021.25, 945, 943.5, 840, 820],
      },
      revenuePerLocation: 33111.0,
      monthlyRevenue: 33110.57,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [4330, 3240, 1121, 777, 521, 98, 69, 29, 13],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          13115.15, 9133.55, 3987.45, 3243.0, 2092.95, 629.7, 416.8, 259.97,
          232.0,
        ],
      },
      totalSales: 10198,
    },
    April: {
      topTransactions: {
        labels: [
          "Ouro Brasileiro shot",
          "Serenity Green Tea Rg",
          "Brazilian Lg",
          "Traditional Blend Chai Lg",
          "Morning Sunrise Chai Rg",
        ],
        data: [317, 289, 287, 277, 272],
      },
      topSelling: {
        labels: [
          "I Need My Bean! T-shirt",
          "Sustainably Grown Organic Lg",
          "Dark chocolate Lg",
          "Brazilian Lg",
          "Morning Sunrise Chai Lg",
        ],
        data: [350, 1230.25, 1170, 1004.5, 1000],
      },
      revenuePerLocation: 40305.0,
      monthlyRevenue: 40304.14,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [5150, 3881, 1309, 975, 605, 134, 79, 37, 24],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          15511.6, 10961.05, 4670.45, 4056.25, 3223.75, 729.2, 484.0, 354.0,
          313.84,
        ],
      },
      totalSales: 12194,
    },
    Mei: {
      topTransactions: {
        labels: [
          "Ouro Brasileiro shot",
          "Traditional Blend Chai Rg",
          "English Breakfast Lg",
          "Latte Rg",
          "Sustainably Grown Organic Lg",
        ],
        data: [386, 373, 365, 359, 354],
      },
      topSelling: {
        labels: [
          "Sustainably Grown Organic Lg",
          "Latte Rg",
          "I Need My Bean! T-shirt",
          "Dark chocolate Lg",
          "Cappuccino",
        ],
        data: [1681.5, 1525.75, 440, 1381.5, 1286.25],
      },
      revenuePerLocation: 52599.0,
      monthlyRevenue: 52598.93,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [6641, 5160, 1726, 1248, 813, 179, 108, 39, 30],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          20123.3, 14526.95, 6167.25, 5193.5, 4084.0, 988.1, 650.4, 518.0,
          347.43,
        ],
      },
      totalSales: 15944,
    },
    Juni: {
      topTransactions: {
        labels: [
          "Ouro Brasileiro shot",
          "Ethiopia Lg",
          "Our Old Time Diner Blend Sm",
          "Latte",
          "Latte Rg",
        ],
        data: [435, 385, 380, 375, 373],
      },
      topSelling: {
        labels: [
          "I Need My Bean! Diner mug",
          "Sustainably Grown Organic Lg",
          "Latte Rg",
          "Dark chocolate Lg",
          "Morning Sunrise Chai Lg",
        ],
        data: [385, 1705.25, 1585.25, 1516.5, 1432],
      },
      revenuePerLocation: 56958.0,
      monthlyRevenue: 56957.08,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [7280, 5391, 1807, 1374, 879, 192, 122, 52, 27],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          22013.85, 15217.75, 6445.0, 5687.0, 4909.25, 1126.8, 703.2, 434.23,
          420.0,
        ],
      },
      totalSales: 17124,
    },
  },
  Astoria: {
    Januari: {
      topTransactions: {
        labels: [
          "Traditional Blend Chai Rg",
          "Spicy Eye Opener Chai Lg",
          "Sustainably Grown Organic Rg",
          "Dark chocolate Lg",
          "Dark chocolate Rg",
        ],
        data: [205, 204, 198, 195, 191],
      },
      topSelling: {
        labels: [
          "Dark chocolate Lg",
          "Sustainably Grown Organic Lg",
          "Sustainably Grown Organic Rg",
          "Latte Rg",
          "Cappuccino Lg",
        ],
        data: [877.5, 821.75, 742.5, 735.25, 731],
      },
      revenuePerLocation: 27314.0,
      monthlyRevenue: 27313.66,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [3435, 2787, 872, 757, 271, 59, 43, 42, 15],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          10386.8, 7827.95, 3110.25, 3102.5, 1261.3, 858.0, 395.95, 216.8,
          154.11,
        ],
      },
      totalSales: 8281,
    },
    Februari: {
      topTransactions: {
        labels: [
          "Dark chocolate Lg",
          "Dark chocolate Rg",
          "Peppermint Rg",
          "Columbian Medium Roast Rg",
          "Morning Sunrise Chai Lg",
        ],
        data: [201, 188, 186, 180, 180],
      },
      topSelling: {
        labels: [
          "Dark chocolate Lg",
          "Sustainably Grown Organic Lg",
          "Morning Sunrise Chai Lg",
          "Latte Rg",
          "Dark chocolate Rg",
        ],
        data: [904.5, 840.75, 720, 705.5, 658],
      },
      revenuePerLocation: 25106.0,
      monthlyRevenue: 25105.34,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [3202, 2581, 829, 724, 256, 53, 37, 25, 11],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          9725.75, 7303.15, 2995.75, 2925.5, 1034.2, 475.0, 342.8, 204.8, 98.39,
        ],
      },
      totalSales: 7718,
    },
    Maret: {
      topTransactions: {
        labels: [
          "Earl Grey Rg",
          "Jamaican Coffee River Lg",
          "Brazilian Rg",
          "Morning Sunrise Chai Lg",
          "Columbian Medium Roast Rg",
        ],
        data: [264, 241, 239, 237, 237],
      },
      topSelling: {
        labels: [
          "Cappuccino Lg",
          "Sustainably Grown Organic Lg",
          "Dark chocolate Lg",
          "Latte Rg",
          "Morning Sunrise Chai Lg",
        ],
        data: [1003, 988, 967.5, 956.25, 948],
      },
      revenuePerLocation: 32836.0,
      monthlyRevenue: 32835.43,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [4157, 3415, 1090, 851, 303, 78, 51, 41, 13],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          12649.0, 9640.0, 3861.75, 3505.5, 1571.4, 759.0, 474.4, 242.4, 131.98,
        ],
      },
      totalSales: 9999,
    },
    April: {
      topTransactions: {
        labels: [
          "Dark chocolate Lg",
          "Jamaican Coffee River Rg",
          "Earl Grey Rg",
          "Columbian Medium Roast Rg",
          "Peppermint Rg",
        ],
        data: [322, 305, 301, 289, 281],
      },
      topSelling: {
        labels: [
          "Dark chocolate Lg",
          "Sustainably Grown Organic Lg",
          "Cappuccino Lg",
          "Latte Rg",
          "Sustainably Grown Organic Rg",
        ],
        data: [1449, 1254, 1122, 1041.25, 1031.25],
      },
      revenuePerLocation: 39478.0,
      monthlyRevenue: 39477.61,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [5038, 4050, 1256, 1104, 360, 82, 60, 52, 24],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          15280.55, 11401.9, 4584.75, 4465.0, 1693.65, 957.0, 559.2, 288.0,
          247.56,
        ],
      },
      totalSales: 12026,
    },
    Mei: {
      topTransactions: {
        labels: [
          "Dark chocolate Lg",
          "Earl Grey Rg",
          "Peppermint Rg",
          "Our Old Time Diner Blend Sm",
          "Ethiopia Sm",
        ],
        data: [401, 394, 392, 381, 372],
      },
      topSelling: {
        labels: [
          "Dark chocolate Lg",
          "Sustainably Grown Organic Lg",
          "Morning Sunrise Chai Lg",
          "Latte",
          "Latte Rg",
        ],
        data: [1804.5, 1762.25, 1448, 1365, 1360],
      },
      revenuePerLocation: 52429.0,
      monthlyRevenue: 52428.76,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [6733, 5475, 1700, 1435, 505, 114, 74, 50, 28],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          20282.1, 15441.9, 6046.25, 5971.25, 2279.6, 1037.0, 689.9, 404.0,
          276.76,
        ],
      },
      totalSales: 16114,
    },
    Juni: {
      topTransactions: {
        labels: [
          "Dark chocolate Lg",
          "Earl Grey Rg",
          "Spicy Eye Opener Chai Lg",
          "Peppermint Rg",
          "Morning Sunrise Chai Lg",
        ],
        data: [421, 401, 398, 398, 396],
      },
      topSelling: {
        labels: [
          "Dark chocolate Lg",
          "Sustainably Grown Organic Lg",
          "Morning Sunrise Chai Lg",
          "Latte Rg",
          "Cappuccino Lg",
        ],
        data: [1894.5, 1843, 1584, 1559.75, 1389.75],
      },
      revenuePerLocation: 55084.0,
      monthlyRevenue: 55083.11,
      transactionsCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [7090, 5740, 1749, 1480, 511, 116, 79, 69, 19],
      },
      revenueCategory: {
        labels: [
          "Coffee",
          "Tea",
          "Bakery",
          "Drinking Chocolate",
          "Flavours",
          "Coffee beans",
          "Loose Tea",
          "Branded",
          "Packaged Chocolate",
        ],
        data: [
          21420.1, 16225.0, 6198.75, 6167.75, 2379.05, 1371.0, 731.75, 408.8,
          180.91,
        ],
      },
      totalSales: 16853,
    },
  },
};

let topTransactionsChart,
  topSellingChart,
  revenuePerLocationChart,
  monthlyRevenueChart,
  transactionsCategoryChart,
  revenueCategoryChart,
  totalSalesChart;

function createChart(ctx, type, labels, data, label) {
  return new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
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
}

function aggregateData(filterStore, filterMonth) {
  const aggregatedData = {
    topTransactions: { labels: [], data: [] },
    topSelling: { labels: [], data: [] },
    revenuePerLocation: 0,
    monthlyRevenue: 0,
    transactionsCategory: { labels: [], data: [] },
    revenueCategory: { labels: [], data: [] },
    totalSales: 0,
  };

  let tempTopTransactions = {};
  let tempTopSelling = {};

  for (const store in data) {
    if (filterStore !== "All" && filterStore !== store) continue;

    for (const month in data[store]) {
      if (filterMonth !== "All" && filterMonth !== month) continue;

      const monthData = data[store][month];

      // Aggregate top transactions
      monthData.topTransactions.labels.forEach((item, index) => {
        tempTopTransactions[item] =
          (tempTopTransactions[item] || 0) +
          monthData.topTransactions.data[index];
      });

      // Aggregate top selling
      monthData.topSelling.labels.forEach((item, index) => {
        tempTopSelling[item] =
          (tempTopSelling[item] || 0) + monthData.topSelling.data[index];
      });

      // Aggregate other metrics
      aggregatedData.revenuePerLocation += monthData.revenuePerLocation;
      aggregatedData.monthlyRevenue += monthData.monthlyRevenue;
      aggregatedData.totalSales += monthData.totalSales;

      monthData.transactionsCategory.labels.forEach((item, index) => {
        const idx = aggregatedData.transactionsCategory.labels.indexOf(item);
        if (idx === -1) {
          aggregatedData.transactionsCategory.labels.push(item);
          aggregatedData.transactionsCategory.data.push(
            monthData.transactionsCategory.data[index]
          );
        } else {
          aggregatedData.transactionsCategory.data[idx] +=
            monthData.transactionsCategory.data[index];
        }
      });

      monthData.revenueCategory.labels.forEach((item, index) => {
        const idx = aggregatedData.revenueCategory.labels.indexOf(item);
        if (idx === -1) {
          aggregatedData.revenueCategory.labels.push(item);
          aggregatedData.revenueCategory.data.push(
            monthData.revenueCategory.data[index]
          );
        } else {
          aggregatedData.revenueCategory.data[idx] +=
            monthData.revenueCategory.data[index];
        }
      });
    }
  }

  // Convert object to sorted arrays
  aggregatedData.topTransactions.labels = Object.keys(tempTopTransactions);
  aggregatedData.topTransactions.data = Object.values(tempTopTransactions);
  aggregatedData.topSelling.labels = Object.keys(tempTopSelling);
  aggregatedData.topSelling.data = Object.values(tempTopSelling);

  return aggregatedData;
}

function updateDashboard() {
  const store = storeFilter.value;
  const month = monthFilter.value;

  const selectedData = aggregateData(store, month);

  if (topTransactionsChart) topTransactionsChart.destroy();
  topTransactionsChart = createChart(
    document.getElementById("topTransactionsChart"),
    "bar",
    selectedData.topTransactions.labels,
    selectedData.topTransactions.data,
    "Top Transactions Product"
  );

  if (topSellingChart) topSellingChart.destroy();
  topSellingChart = createChart(
    document.getElementById("topSellingChart"),
    "bar",
    selectedData.topSelling.labels,
    selectedData.topSelling.data,
    "Top Best Selling Product"
  );

  if (revenuePerLocationChart) revenuePerLocationChart.destroy();
  revenuePerLocationChart = createChart(
    document.getElementById("revenuePerLocationChart"),
    "bar",
    ["Revenue"],
    [selectedData.revenuePerLocation],
    "Revenue per Location"
  );

  if (monthlyRevenueChart) monthlyRevenueChart.destroy();
  monthlyRevenueChart = createChart(
    document.getElementById("monthlyRevenueChart"),
    "bar",
    [month],
    [selectedData.monthlyRevenue],
    "Monthly Revenue"
  );

  if (transactionsCategoryChart) transactionsCategoryChart.destroy();
  transactionsCategoryChart = createChart(
    document.getElementById("transactionsCategoryChart"),
    "bar",
    selectedData.transactionsCategory.labels,
    selectedData.transactionsCategory.data,
    "Transactions of Category Product"
  );

  if (revenueCategoryChart) revenueCategoryChart.destroy();
  revenueCategoryChart = createChart(
    document.getElementById("revenueCategoryChart"),
    "bar",
    selectedData.revenueCategory.labels,
    selectedData.revenueCategory.data,
    "Revenue of Category Product"
  );

  if (totalSalesChart) totalSalesChart.destroy();
  totalSalesChart = createChart(
    document.getElementById("totalSalesChart"),
    "bar",
    [month],
    [selectedData.totalSales],
    "Total Sales"
  );
}

updateDashboard();
