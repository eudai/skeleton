var Utils = function(){

	this.payload = function(req,res,next){
		req.payload = {}
		next()
	}

}