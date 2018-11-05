var express = require('express')

module.exports = function(sequelize){

	var router = express.Router()

	router.post('/reset',function(req,res,next){
		sequelize.sync({ force:true }).then(function(){
			res.status(200).send()
		}).catch(function(error){
			res.json(error)
		})
	})

	return router

}