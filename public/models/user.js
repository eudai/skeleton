var Backbone = require('backbone')
var $ = require('jquery')

var User = Backbone.Model.extend({

	urlRoot: '/user',

	initialize: function(){
		this.check()
	},

	login: function(username,password){
		return $.ajax({
			url: '/login',
			method: 'POST',
			context: this,
			data: {
				username: username,
				password: password
			}
		}).done(this.set)
	},

	logout: function(){
		return $.ajax({
			url: '/login',
			method: 'DELETE',
			context: this
		}).done(this.clear)
	},

	check: function(){
		return $.ajax({
			url: '/login',
			method: 'GET',
			context: this
		}).done(this.set)
	},

	defaults: {
		email: "",
		username: "",
		password: "",
		first: "",
		middle: "",
		last: "",
		display: "",
		birthdate: "",
	}

})

module.exports = User