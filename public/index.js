var ReactDOM = require('react-dom')
var Backbone = require('backbone')

var App = require('./components/app.js')
var User = require('./models/user.js')


var user = new User



var start = function(){
	var rootElement = document.querySelector('#root')
	var app = new App({
		user: user
	})
	ReactDOM.render(app.render(),rootElement)
	Backbone.history.start()
}

user.check().done(start)