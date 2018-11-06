var browserify = require('browserify')
var reactify = require('reactify')
var path = require('path')
var fs = require('fs')

var source = path.join(__dirname,'../public/index.js')
var destination = path.join(__dirname,'../public/bundle.js')

var b = browserify({
	entries: [source],
	transform: [reactify]
})

b.bundle().on('error',function(error){
	console.log(error.message)
}).pipe(fs.createWriteStream(destination))