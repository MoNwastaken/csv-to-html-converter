var fs = require('fs');
var toConvert;
var description;
var date = 0;
var duration = 0;
var descriptionArray = [];
var dateArray = [];
var durationArray = [];

// Read the file to convert
toConvert = toConvert + fs.readFileSync('test.csv');

// Split the file by rows
var splitData = toConvert.split(/\r?\n|\r/);

// Creating table
var tableData = '<table border=1>';

// Counting the rows
for (var i = 0; i < splitData.length; i++) {

    var cellData = splitData[i].split(";");
    tableData += '<tr>';

    // Counting the columns
    for(var x = 0; x < cellData.length; x++) {

        // Date
        if (x === 7) {
            if (i === 0)
            {
                tableData += '<th>' + cellData[x] + '</th>';
            }
            else
            {
                if (cellData[x] === date)
                {
                    tableData += '<td>' + 'sameDay' + '</td>';
                } else
                {
                    // Write the data
                    date = cellData[x];
                    description = "";
                    duration = "";
                    tableData += '<td>' + cellData[x] + '</td>';
                }
            }
        // Description
        } else if (x === 5) {
            if (i === 0)
            {
                tableData += '<th>' + cellData[x] + '</th>';
            }
            else
            {
                tableData += '<td>' + cellData[x] + '</td>';
            }
        // Duration
        } else if (x === 11) {
            if (i === 0)
            {
                tableData += '<th>' + cellData[x] + '</th>';
            }
            else
            {
                duration += cellData[x].split(':');
                tableData += '<td>' + cellData[x] + '</td>';
            }
        }

    }
    tableData += '</tr>';
}
tableData += '</table>';

// Creating HTML content
var htmlContent = '<html><head></head><body>'+ tableData +'</body></html>';

//var htmlContentFinal = '<html><head></head><body></body></html>';

// Writing htmlContent to the file named my-page.html
fs.writeFile('my-page.html', htmlContent, (error) => { /*handle error*/ });

// Converting string to seconds CODE BELOW IS FOR TESTING ONLY
/*var hms = '02:04:33';   // your input string
var hms2 = '00:00:02';   // your input string
var a = hms.split(':'); // split it at the colons
var b = hms2.split(':'); // split it at the colons

// minutes are worth 60 seconds. Hours are worth 60 minutes.
var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])+(+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2]);

console.log(seconds);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

