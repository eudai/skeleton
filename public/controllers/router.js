var Backbone = require('backbone')
var ReactDOM = require('react-dom')

var Login = require('../components/login.js')
var Home = require('../components/home.js')


var Router = Backbone.Router.extend({

	initialize: function(app){
		this.app = app
	},

	routes: {
		'login': 'login',
		'home': 'home',
		'*default': 'login'
	},

	login: function(){
		if (this.app.user.id){
			return this.navigate('#home',{ trigger: true })	
		}
		var login = new Login(app)
		this.show(login)
	},

	home: function(){
		if (!this.app.user.id){
			return this.navigate('#login',{ trigger: true })	
		}
		var home = new Home(app)
		this.show(home)
	},

	show: function(component){
		var viewport = document.querySelector('#viewport')
		ReactDOM.render(component.render(),viewport)
	}

})

module.exports = Router