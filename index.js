var fs = require('fs');
var toConvert;

// Read the file to convert
toConvert = toConvert + fs.readFileSync('test.csv');

// Split the file by rows
var splitData = toConvert.split(/\r?\n|\r/);

// Creating table
var tableData = '<table border=1>';

for (var i = 0; i < splitData.length; i++) {

    var cellData = splitData[i].split(";");
    tableData += '<tr>';

    for(var x = 0; x < cellData.length; x++) {

        if (i === 0)
        {
            tableData += '<th>' + cellData[x] + '</th>';
        }
        else
        {
            tableData += '<td>' + cellData[x] + '</td>';
        }

    }
    tableData += '</tr>';
}
tableData += '</table>';

// Creating HTML content
var htmlContent = '<html><head></head><body>'+ tableData +'</body></html>';

// Writing htmlContent to the file named my-page.html
fs.writeFile('my-page.html', htmlContent, (error) => { /* handle error */ });
