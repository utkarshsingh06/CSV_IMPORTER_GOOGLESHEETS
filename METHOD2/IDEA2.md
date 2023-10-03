# METHOD 2

# Using a Web Interface to Interact with the User

Steps Invovlved-

(i) Create an INDEX.html file

- The provided HTML and JavaScript code creates a web interface that allows users to upload a CSV (Comma-Separated Values) file.

- Now using the "getCsvColumnNames" function in script we will fetch all the clomuns from the imported csv file.
- Then we will dynamically show the all columns names in form of html check boxes.

- Now user will select which column he/she wants to filter.
- Then click Fetch.


(ii) Create an APPSCRIPT file 

- Its functions are-
   
# doGet():
- this function serves the HTML file named 'Index' as a web app  when the web app is accessed, it displays the HTML content defined in the 'Index' file.

# importAndFetchColumns(csvData, selectedColumns):
- This function is called when the user selects specific columns from a CSV file and clicks the "Fetch Columns" button in the web app's interface.
- Parses the CSV data using Utilities.parseCsv(csvData) to convert it into a 2D array.
- Filters the data based on the selected columns using the filterDataByColumns(data, selectedColumns) function.
- Creates a new Google Sheet named 'Filtered Data' using SpreadsheetApp.create('Filtered Data').
- Retrieves the default sheet of the new spreadsheet and populates it with the filtered data.
- Returns the URL of the newly created Google Sheet as a success message.

# filterDataByColumns(data, selectedColumns)

- This function is responsible for filtering the CSV data based on the selected columns.
- Splits the selectedColumns string into an array of column names (columnNamesArray).
- Finds the indices of the specified column names in the header row of the CSV data.
- Constructs a new array (selectedData) that contains only the data from the selected columns for each row.

(iii) We are given a link to the filtered csv file to be opened in a google spreadsheet.


# NOTE

- To use this method we need to create both these two files
- delpoy them as a project on google APPSCRIPT
- grant them respective permisssions

# USAGE 

-AFTER DEPLOYING AS A PROJECT WE WILL GET A URL WHICH CAN BE USED DIRECTLY TO ACCESS THE WEB INTERFACE.

# RUN ON VS CODE

- We need to install google clasp
- in terminal--
- clasp install
- clasp -v
- clasp login
- clasp clone 'script id' (script id of the project we created in google APPSCRIPT)
- clasp run (your function)



