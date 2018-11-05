var fs = require('fs')
var browserify = require('browserify')
var hbsfy = require('hbsfy').configure({
	extensions: ['hbs']
})
var b = browserify('./public/index.js')
b.transform(hbsfy)
b.bundle().pipe(fs.createWriteStream('./public/bundle.js'))