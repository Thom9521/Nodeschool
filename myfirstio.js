var fs = require("fs");
var readfile = fs.readFileSync(process.argv[2])

var str = readfile.toString();

console.log(str.split('\n').length - 1);