var express = require('express')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

module.exports = function(sequelize){

	var model = sequelize.models.user

	var router = express.Router()

	var localStrategy = new LocalStrategy(function(username,password,done){
		model.findOne({
			where: {
				username: username
			}
		}).then(function(user){
			if (!user){
				return done(null,false,{ message: 'Username is not registered.' })
			}
			if (!user.validatePassword(password)){
				return done(null,false,{ message: 'Password is incorrect.' })
			}
			done(null,user)
		}).catch(function(error){
			done(error)
		})
	})

	passport.use(localStrategy)

	passport.serializeUser(function(user,done){
		done(null,user.id)
	})

	passport.deserializeUser(function(id,done){
		model.findById(id).then(function(result){
			done(null,result)
		}).catch(function(error){
			done(error)
		})
	})

	router.use(passport.initialize())
	router.use(passport.session())

	// login
	router.post('/login',passport.authenticate('local'),function(req,res){
		res.json(req.user)
	})

	// status
	router.get('/login',function(req,res){
		res.json(req.user || {})
	})

	// logout
	router.delete('/login',function(req,res){
		req.logout()
		res.json({})
	})

	// // activate
	// router.put('/:id',auth.activate,function(req,res){
	// 	res.json(req.payload.user)
	// })

	// // forgot password
	// router.delete('/:id',user.read,user.destroy,function(req,res){
	// 	res.json(req.payload.user)
	// })

	// // reset passsword
	// router.post('/:id',user.restore,user.read,function(req,res){
	// 	res.json(req.payload.user)
	// })

	return router

}