var Sequelize = require('sequelize')

module.exports = function(sequelize){

	var model = sequelize.define('item',{

		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},

		data: {
			type: Sequelize.JSON
		},

		images: {
			type: Sequelize.ARRAY(Sequelize.TEXT)
		},

		files: {
			type: Sequelize.ARRAY(Sequelize.TEXT)
		},

		tags: {
			type: Sequelize.ARRAY(Sequelize.TEXT)
		},

		status: {
			type: Sequelize.STRING
		}

	},{
		timestamps: true,
		paranoid: true
	})

	return model

}