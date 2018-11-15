var express = require('express')
var app = express()

var Sequelize = require('sequelize')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var payload = require('./middlewares/payload.js')

var cfg = {
	db: require('./config/database.json')
}

var sequelize = new Sequelize(cfg.db)

var models = {
	user: require('./models/user.js')(sequelize)
}

var routes = {
	auth: require('./routes/auth.js')(sequelize),
	user: require('./routes/user.js')(sequelize),
	utils: require('./routes/utils.js')(sequelize)
}

sequelize.sync({ force: false }).then(function(){
	console.log('database synced.')
})

app.use('/node_modules',express.static('node_modules'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({
	secret: 'skeleton',
	resave: true,
	saveUninitialized: true
}))

app.use(payload)
app.use('/',routes.auth)
app.use('/user',routes.user)
app.use('/utils',routes.utils)

app.listen(3000,function(){
	console.log('listening...')
})