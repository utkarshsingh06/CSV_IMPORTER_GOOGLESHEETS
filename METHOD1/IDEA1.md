# METHOD1 

# Creating a Tab Within the Google Spreadsheet (CSV Importer)

STEPS INVOVLVED-

(i) CREATE A HTML FILE
- Create a HTML file which takes input from user 
- This code creates a simple HTML form that allows users to upload a CSV file, specify a sheet name (optional), and choose whether to append the data to an existing sheet. 
- When the "Import CSV" button is clicked, the selected CSV data is sent to a Google Apps Script function for further processing, involving importing the data into a Google Sheets spreadsheet.

(ii) CREATE AN APPSCRIPT FILE 

-  It sets up a CSV importer for Google Sheets.
The code appears to be part of a CSV import tool for Google Sheets.
- When we open the Google Sheet, it adds a custom menu option that allows us to trigger the CSV import dialog. When we select the "Import CSV" option, we are prompted to specify which columns from the CSV file you want to import, and the data is then imported into the active sheet in chunks.

(iii) Save both the files and Run the APPSCRIPT file. After execution we can see a navigation tab named "CSV IMPORTER" in google sheets page.

# NOTE

- For this code to work, we need to have a Google Sheet associated with it, and we should also have the 'Index' HTML file that defines the user interface for selecting and importing CSV files. 
- Also, we must  have the appropriate permissions to run Google Apps Script functions in your Google Sheet.