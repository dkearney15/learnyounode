var output = process.argv.slice(2 - process.argv.length).reduce(function(x,y) {return parseInt(x) + parseInt(y)},0)
console.log(output)
