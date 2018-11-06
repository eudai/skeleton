var watchify = require('watchify')
var browserify = require('browserify')
var reactify = require('reactify')
var babelify = require('babelify')
var path = require('path')
var moment = require('moment')
var fs = require('fs')

var source = path.join(__dirname,'../public/index.js')
var destination = path.join(__dirname,'../public/bundle.js')

var b = browserify({
	entries: [source],
	transform: [reactify,'babelify'],
	plugin: [watchify]
})

b.transform('browserify-css', {
    minify: true,
    output: 'bundle.css'
})

var bundle = function(){
	b.bundle().on('error',function(error){
		console.log(error.message)
	}).pipe(fs.createWriteStream(destination))
}

b.on('update',bundle)
b.on('log',function(msg){
	console.log('[%s] %s',moment().format('hh:mm:ss'),msg)
})

bundle()