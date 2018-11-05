var Auth = function(sequelize){

	this.requireUser = function(req,res,next){
		if (!req.user) return res.status(401).send()
		next()
	}

	this.requireAdmin = function(req,res,next){
		next()
	}

	this.allowRead = function(req,res,next){
		next()
	}

	this.allowEdit = function(req,res,next){
		next()
	}

	this.allowAdmin = function(req,res,next){
		next()
	}

}

module.exports = Auth