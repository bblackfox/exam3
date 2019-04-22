var fs = require('fs');

fs.readFile('data.json', function(err, data){
    var jsonData = data;
    var jsonParsed = JSON.parse(jsonData);
    console.log(jsonParsed.items[0].fname, jsonParsed.items[0].age);
    console.log(jsonParsed.items[1].fname, jsonParsed.items[1].age);
})

