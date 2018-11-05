var Crud = function(sequelize){

	this.list = function(req,res,next){
		model.findAndCountAll({
			limit: req.query.limit,
			offset: req.query.offset,
			attributes: req.query.attributes,
			where: req.query.where,
			order: req.query.order,
			paranoid: req.query.paranoid == 'false' ? false : true,
		}).then(function(result){
			req.payload = result
			next()
		}).catch(function(error){
			res.json(error)
		})
	}

	this.create = function(req,res,next){
		model.create(req.body).then(function(result){
			res.json(result)
		}).catch(function(error){
			res.json(error)
		})
	}

	this.read = function(req,res,next){
		model.findById(req.params.id).then(function(result){
			if (!result) return res.status(404).send()
			req.payload = result
			next()
		}).catch(function(error){
			res.json(error)
		})
	}

	this.update = function(req,res,next){
		req.payload.update(req.body).then(function(result){
			req.payload = result
			next()
		}).catch(function(error){
			res.json(error)
		})
	}

	this.destroy = function(req,res,next){
		req.payload.destroy().then(function(result){
			req.payload = result
			next()
		}).catch(function(error){
			res.json(error)
		})
	}

	this.restore = function(req,res,next){
		model.restore({ 
			where: { id: req.params.id }
		}).then(function(result){
			req.payload = result
			next()
		}).catch(function(error){
			res.json(error)
		})
	}

	this.json = function(req,res){
		res.json(req.payload)
	}

}

module.exports = Crud