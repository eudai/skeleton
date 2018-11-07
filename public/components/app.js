var React = require('react')
var Toolbar = require('./toolbar')
var User = require('./user.js')
var Home = require('./home.js')
var Login = require('./login.js')
var User = require('../models/user.js')
var Router = require('../controllers/router.js')


class App extends React.Component {

	constructor(props){
		super(props)
		this.user = new User
		this.router = new Router({
			user: this.user
		})
	}

	logout(){
		this.user.logout()
	}

	render(){
		return (
			<div id='app'>
				<Toolbar user={this.user} />
				<div id='viewport'></div>
			</div>
		)
	}

}

module.exports = App