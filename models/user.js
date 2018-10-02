var Sequelize = require('sequelize')

module.exports = function(sequelize){

	return sequelize.define('user',{

		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},

		email: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false,
			validate: {
				isEmail: true,
			}
		},

		username: {
			type: Sequelize.STRING
		},

		firstName: {
			type: Sequelize.STRING
		},

		lastName: {
			type: Sequelize.STRING
		},

		birthDate: {
			type: Sequelize.DATE
		}

	},{
		timestamps: true,
		paranoid: true
	})

}