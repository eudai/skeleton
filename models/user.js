var Sequelize = require('sequelize')
var bcrypt = require('bcrypt')

module.exports = function(sequelize){

	var model = sequelize.define('user',{

		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},

		email: {
			type: Sequelize.STRING,
			unique: {
				msg: 'Email is not unique.'
			},
			allowNull: false,
			isEmail: {
				msg: 'Email is not formatted correctly.'
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
			type: Sequelize.STRING,
			unique: {
				msg: 'Username is taken.'
			}
		},

		first: {
			type: Sequelize.STRING
		},

		middle: {
			type: Sequelize.STRING
		},

		last: {
			type: Sequelize.STRING
		},

		display: {
			type: Sequelize.STRING
		},

		birthdate: {
			type: Sequelize.DATE
		}

	},{
		timestamps: true,
		paranoid: true
	})

	model.prototype.validatePassword = function(password){
		var hash = this.getDataValue('password')
		return bcrypt.compareSync(password,hash)
	}

	return model

}