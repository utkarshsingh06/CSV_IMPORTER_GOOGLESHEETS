function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CSV Importer')
      .addItem('Import CSV', 'showDialog')
      .addToUi();
}

function showDialog() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('Index')
      .setWidth(400)
      .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'CSV Importer');
}

function importCSV(data) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var csvData = Utilities.parseCsv(data);
    var headers = csvData[0];
    
    var ui = SpreadsheetApp.getUi();
    var response = ui.prompt('Column Selection', 'Please enter a comma-separated list of columns to import (e.g., 1, 3, 5):', ui.ButtonSet.OK_CANCEL);
    
    if (response.getSelectedButton() == ui.Button.OK) {
      var columnsToImport = response.getResponseText().split(',');
      var importedData = [];
      
      for (var i = 0; i < csvData.length; i++) {
        var rowData = [];
        for (var j = 0; j < columnsToImport.length; j++) {
          var columnIndex = parseInt(columnsToImport[j]) - 1;
          if (columnIndex >= 0 && columnIndex < headers.length) {
            rowData.push(csvData[i][columnIndex]);
          }
        }
        importedData.push(rowData);
        
        // Process data in chunks (e.g., every 1000 rows)
        if (importedData.length >= 1000) {
          appendDataToSheet(importedData, sheet);
          importedData = [];
        }
      }
      
      // Process any remaining data
      if (importedData.length > 0) {
        appendDataToSheet(importedData, sheet);
      }
      
      ui.alert('CSV data imported successfully.');
    }
  } catch (error) {
    SpreadsheetApp.getUi().alert('Error importing CSV data: ' + error);
  }
}

function appendDataToSheet(data, sheet) {
  // Append data to the existing sheet
  sheet.getRange(sheet.getLastRow() + 1, 1, data.length, data[0].length).setValues(data);
}

// Rest of the code remains the same.
