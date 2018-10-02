var express = require('express')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

module.exports = function(model){

	var router = express.Router()

	var localStrategy = new LocalStrategy(function(username,password,done){
		model.findOne({
			where: {
				username: username
			}
		}).then(function(user){
			if (!user){
				return done(null,false,{ message: 'Incorrect username.' })
			}
			if (!user.validatePassword(password)){
				return done(null,false,{ message: 'Incorrect password.' })
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
	router.post('/auth/login',passport.authenticate('local'),function(req,res){
		res.json(req.user)
	})

	// logout
	router.get('/auth/logout',function(req,res){
		req.logout()
		res.status(200).send()
	})

	// status
	router.get('/auth/status',function(req,res){
		res.json(req.user)
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