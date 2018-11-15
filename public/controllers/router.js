var Backbone = require('backbone')
var ReactDOM = require('react-dom')

var Login = require('../components/login.js')
var Home = require('../components/home.js')
var Account = require('../components/account.js')
var Register = require('../components/register.js')


var Router = Backbone.Router.extend({

	initialize: function(app){
		this.app = app
	},

	routes: {
		'login': 'login',
		'logout': 'logout',
		'register': 'register',
		'account': 'account',
		'home': 'home',
		'*default': 'login'
	},

	login: function(){
		if (this.app.user.id){
			return this.navigate('#home',{ trigger: true })	
		}
		var login = new Login(this.app)
		this.show(login)
	},

	logout: function(){
		this.app.user.logout().done(function(){
			this.navigate('#login',{ trigger: true })
		}.bind(this))
	},

	register: function(){
		var view = new Register({
			user: this.app.user
		})
		this.show(view)
	},

	home: function(){
		if (!this.app.user.id){
			return this.navigate('#login',{ trigger: true })	
		}
		var home = new Home(this.app)
		this.show(home)
	},

	account: function(){
		var view = new Account({
			user: this.app.user
		})
		this.show(view)
	},

	show: function(component){
		var viewport = document.querySelector('#viewport')
		ReactDOM.render(component.render(),viewport)
	}

})

module.exports = Router