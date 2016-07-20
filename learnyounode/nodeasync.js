var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (function(error, stuff) {
	if(error){
		throw "ERROR!!!";
	}
	else{
		console.log(stuff.split(/\r?\n/).length - 1);
	}
}));