var express = require('express')
var app = express()

var Sequelize = require('sequelize')
var bodyParser = require('body-parser')
var payload = require('./middlewares/payload.js')

var config = {
	database: require('./config/database.json')
}

var sequelize = new Sequelize(config.database)

var models = {
	user: require('./models/user.js')(sequelize)
}

var routes = {
	user: require('./routes/user.js')(models.user),
	reset: require('./routes/reset.js')(sequelize)
}

sequelize.sync({ force: false }).then(function(){
	console.log('database synced.')
})

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(payload)

app.use('/user',routes.user)
app.use('/reset',routes.reset)

app.listen(3000,function(){
	console.log('listening...')
})