var express = require('express')
var app = express()

var Sequelize = require('sequelize')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')

var cfg = {
	db: require('./config/database.json')
}


var sequelize = new Sequelize(cfg.db)

var models = {
	user: require('./models/user.js')(sequelize),
	item: require('./models/item.js')(sequelize)
}

var routes = {
	auth: require('./routes/auth.js')(sequelize),
	user: require('./routes/user.js')(sequelize),
	item: require('./routes/item.js')(sequelize),
	utils: require('./routes/utils.js')(sequelize)
}

sequelize.sync({ force: false }).then(function(){
	console.log('database synced.')
})

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
	secret: 'skeleton'
}))

app.use('/',routes.auth)
app.use('/user',routes.user)
app.use('/item',routes.item)
app.use('/utils',routes.utils)

app.listen(3000,function(){
	console.log('listening...')
})

console.log('hello.')

