# Hola, Utkarsh Here

### Problem Statement: Crafting a CSV Importer for Google Sheets

### Method 1: Creating a Tab Within the Google Spreadsheet (CSV Importer)

- Ask the user for the CSV file they want to import.
- Allow them to specify the column numbers they want to retrieve and filter.
- This method only works within a google spreadsheet only.

### Method 2: Using a Web Interface to Interact with the User

- The user uploads a CSV file.
- All columns of the CSV file are dynamically generated as checkboxes, allowing the user to select which columns to retrieve.
- After clicking "Fetch," a link is generated to open the output file/sheet in a new Google Spreadsheet.

- link to the webapp made on APPSCRIPT -->https://script.google.com/macros/s/AKfycby_WRtJGTCo1_xNenIGIF2VN0RPqdkxP36MgjYI5B3pWTSllqz02mykTAvhnsT32O3ddw/exec

- xI prefer the second method as it is more user-friendly and also covers most of the pointers like selecting the columns and filtering them easily.
 
 ## PROBLEMS
 - Since the codebase is based on html and javascript so, when we have large data of size the webapp doesn't retrieve the filtered results it just fetches the columns and display them in check box form.
 - For that the csv file processing needs to be in server side using nodejs,python or php.
 - I'll  try  to improve this processing using above backend services.


 ## DETAILED VIEW OF BOTH METHODS HAVE BEEN MENTONED IN THEIR RESPECTIVE DIRECTORIES in the IDEA1.md and IDEA2.md.





