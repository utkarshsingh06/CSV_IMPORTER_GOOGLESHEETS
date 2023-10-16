function doGet() {
  // Serve the HTML file as a web app
  return HtmlService.createHtmlOutputFromFile('Index');
}

function importAndFetchColumns(csvData, selectedColumns) {
  try {
      // Parse the CSV data
      var data = Utilities.parseCsv(csvData);

      // Filter the data based on selected columns
      var filteredData = filterDataByColumns(data, selectedColumns);

      // Convert the filtered data back to CSV format
      var csvContent = convertToCsv(filteredData);

      // Return the filtered CSV data
      return csvContent;
  } catch (error) {
      return "Error fetching and filtering data: " + error;
  }
}

// Function to filter data based on selected columns
function filterDataByColumns(data, selectedColumns) {
  var columnNamesArray = selectedColumns.split(',');
  var headerRow = data[0];
  var columnIndices = [];

  // Find the indices of the specified column names
  for (var i = 0; i < columnNamesArray.length; i++) {
      var columnName = columnNamesArray[i].trim();
      var columnIndex = headerRow.indexOf(columnName);
      if (columnIndex !== -1) {
          columnIndices.push(columnIndex);
      }
  }

  var selectedData = [];
  for (var i = 0; i < data.length; i++) {
      var rowData = [];
      for (var j = 0; j < columnIndices.length; j++) {
          var columnIndex = columnIndices[j];
          rowData.push(data[i][columnIndex]);
      }
      selectedData.push(rowData);
  }

  return selectedData;
}

// Function to convert data to CSV format
function convertToCsv(data) {
  var csvContent = "data:text/csv;charset=utf-8,";
  data.forEach(function (row) {
      var rowContent = row.join(",");
      csvContent += rowContent + "\n";
  });
  return encodeURI(csvContent);
}
