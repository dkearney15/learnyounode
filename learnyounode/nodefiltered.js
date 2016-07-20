var fs = require('fs')

var path = require('path')


var filePath = process.argv[2]

fs.readdir(filePath, function(error, list) {
	var fileType = '.' + process.argv[3]
	for(i = 0; i < list.length; i += 1) {
		if(path.extname(list[i]) === fileType){
			console.log(list[i])
		}
	}
})