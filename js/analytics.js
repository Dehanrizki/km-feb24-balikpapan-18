$(document).ready(function () {
  // Load the JSON data
  $.getJSON("data/transaction.json", function (data) {
    // Initialize DataTables
    $("#transactionTable").DataTable({
      data: data,
      columns: [
        { data: "transaction_id" },
        { data: "transaction_date" },
        { data: "transaction_time" },
        { data: "transaction_qty" },
        { data: "store_id" },
        { data: "store_location" },
        { data: "product_id" },
        { data: "unit_price" },
        { data: "product_category" },
        { data: "product_type" },
        { data: "product_detail" },
        { data: "revenue" },
      ],
      // Enable searching and filtering
      searching: true,
      paging: true,
      info: true,
    });
  });
});

$(document).ready(function () {
  $.getJSON("data/product.json", function (data) {
    var tableData = [];
    $.each(data, function (index, item) {
      tableData.push([
        item.product_id || item.product_id__1,
        item.product_category || item.product_category__1,
        item.product_type || item.product_type__1,
        item.product_detail || item.product_detail__1,
      ]);
    });

    $("#productTable").DataTable({
      data: tableData,
      columns: [
        { title: "Product ID" },
        { title: "Category" },
        { title: "Type" },
        { title: "Detail" },
      ],
    });
  });
});
