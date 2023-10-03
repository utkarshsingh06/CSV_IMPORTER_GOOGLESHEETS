function doGet() {
    // Serve the HTML file as a web app
    return HtmlService.createHtmlOutputFromFile('Index');
  }
  // function displayFetchedData(data) {
  //   var googleSheetUrl = data; // Assuming the data contains the Google Sheet URL
  
  //   // Create an HTML message with a clickable link
  //   var message = 'Filtered data created successfully. You can access it here: <a href="' + googleSheetUrl + '" target="_blank">Google Sheet Link</a>';
  
  //   // Return the HTML message as a string
  //   return message;
  // }
  
  function importAndFetchColumns(csvData, selectedColumns) {
    try {
      // Parse the CSV data
      var data = Utilities.parseCsv(csvData);
  
      // Filter the data based on selected columns
      var filteredData = filterDataByColumns(data, selectedColumns);
  
      // Create a new Google Sheet
      var newSheet = SpreadsheetApp.create('Filtered Data');
      var newSheetId = newSheet.getId();
      
      // Populate the default sheet of the new spreadsheet with the filtered data
      var newSheetData = newSheet.getSheets()[0];
      newSheetData.getRange(1, 1, filteredData.length, filteredData[0].length).setValues(filteredData);
  
      // Return a success message with the URL of the new sheet
      return "https://docs.google.com/spreadsheets/d/" + newSheetId;
    } catch (error) {
      return "Error fetching and creating filtered data: " + error;
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
  