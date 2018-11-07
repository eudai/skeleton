var Backbone = require('backbone')
var $ = require('jquery')

var Session = Backbone.Model.extend({

	url: '/login',

	initialize: function(){
		this.loggedIn = false
		this.on('change',this.changeHandler,this)
		this.fetch()
	},

	changeHandler: function(user){
		if (this.user.id){
			this.loggedIn = true
			Backbone.Events.trigger('user_logged_in',user)
		} else {
			this.loggedIn = false
			Backbone.Events.trigger('user_logged_out')
		}
	}

})

module.exports = Session