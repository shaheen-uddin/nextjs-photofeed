 function formatDate(inputDate) {
    // Parse inputDate string into a Date object
    var date = new Date(inputDate);
    
    // Array of month names
    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
    
    // Extract day, month, and year from the Date object
    var day = date.getDate();
    var month = date.getMonth(); // Returns 0 for January, 1 for February, etc.
    var year = date.getFullYear();
    
    // Format the output date string
    var formattedDate = day + " " + monthNames[month] + " " + year;
    
    return formattedDate;
}

export { formatDate }