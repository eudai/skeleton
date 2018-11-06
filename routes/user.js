var express = require('express')
var User = require('../middlewares/user.js')

module.exports = function(sequelize){

	var router = express.Router()
	var user = new User(sequelize)

	// create
	router.post('/',user.create,user.json)

	// list
	router.get('/',user.list,user.json)

	// read
	router.get('/:id',user.read,user.json)

	// update
	router.put('/:id',user.read,user.update,user.json)

	// destroy
	router.delete('/:id',user.read,user.destroy,user.json)

	// restore
	router.post('/:id',user.restore,user.read,user.json)

	return router

}