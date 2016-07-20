var fs = require('fs')

var buff = fs.readFileSync(process.argv[2])
var str = buff.toString()
console.log(str.split(/\r?\n/).length - 1)
