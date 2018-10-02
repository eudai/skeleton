var express = require('express')
var User = require('../middlewares/user.js')

module.exports = function(model){

	var router = express.Router()
	var user = new User(model)

	// create
	router.post('/',user.create,function(req,res){
		res.json(req.payload.user)
	})

	// list
	router.get('/',user.list,function(req,res){
		res.json(req.payload.userList)
	})

	// read
	router.get('/:id',user.read,function(req,res){
		res.json(req.payload.user)
	})

	// update
	router.put('/:id',user.read,user.update,function(req,res){
		res.json(req.payload.user)
	})

	// destroy
	router.delete('/:id',user.read,user.destroy,function(req,res){
		res.json(req.payload.user)
	})

	router.post('/:id',user.restore,user.read,function(req,res){
		res.json(req.payload.user)
	})

	return router

}