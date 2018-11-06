var Backbone = require('backbone')
var $ = require('jquery')

var User = Backbone.Model.extend({

	urlRoot: '/user',

	login: function(username,password){
		return $.ajax({
			url: '/login',
			method: 'POST',
			data: {
				username: username,
				password: password
			}
		})
	},

	logout: function(){

	},

	check: function(){

	}

})