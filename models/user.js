var Sequelize = require('sequelize')
var bcrypt = require('bcrypt')

module.exports = function(sequelize){

	var Model = sequelize.define('user',{

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

		password: {
			type: Sequelize.STRING,
			set: function(value){
				var hash = bcrypt.hashSync(value,10)
				this.setDataValue('password',hash)
			},
			get: function(){}
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

	Model.prototype.validatePassword = function(password){
		var hash = this.getDataValue('password')
		return bcrypt.compareSync(password,hash)
	}

	return Model

}