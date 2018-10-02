var passport = require('passport')

var Authorization = function(model){

	this.logout = function(req,res,next){
		req.logout()
		next()
	}

	this.status = function(req,res,next){

	}



}

module.exports = User