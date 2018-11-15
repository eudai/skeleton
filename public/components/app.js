var React = require('react')
var ReactDOM = require('react-dom')
var Home = require('./home.js')
var Login = require('./login.js')
var User = require('../models/user.js')
var Router = require('../controllers/router.js')
var Navigation = require('./navigation.js')


class App extends React.Component {

	constructor(props){
		super(props)
		this.router = new Router({
			user: props.user
		})
		props.user.on('change',this.refresh,this)
	}

	refresh(){
		var el = document.querySelector('#root')
		ReactDOM.render(this.render(),el)
	}

	render(){
		return (
			<div id='app'>
				<Navigation user={this.props.user}/>
				<div id='viewport' className='container'></div>
			</div>
		)
	}

}

module.exports = App