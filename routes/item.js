var express = require('express')
var Crud = require('../middlewares/crud.js')

module.exports = function(sequelize){

	var router = express.Router()
	var crud = new Crud(sequelize.models.item)

	// create
	router.post('/',crud.create,crud.json)

	// list
	router.get('/',crud.list,crud.json)

	// read
	router.get('/:id',crud.read,crud.json)

	// update
	router.put('/:id',crud.read,crud.update,crud.json)

	// destroy
	router.delete('/:id',crud.read,crud.destroy,crud.json)

	// restore
	router.post('/:id',crud.restore,crud.read,crud.json)

	return router

}