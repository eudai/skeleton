var React = require('react')
var $ = require('jquery')

class User extends React.Component {

	constructor(props){
		super(props)
		this.loggedIn = false
		this.props = {}
		this.state = {
			loggedIn: false
		}
	}

	check(){
		return $.ajax({
			url: '/login',
			method: 'GET',
			context: this
		}).done(function(data){
			this.props = data
			this.state.loggedIn = !!data.username
		})
	}

	login(data){
		return $.ajax({
			url: '/login',
			method: 'POST',
			context: this,
			data: data,
		}).done(function(data){
			this.props = data
			this.state.loggedIn = true
			this.forceUpdate()
		}.bind(this))
	}

	logout(){
		return $.ajax({
			url: '/login',
			method: 'DELETE',
			context: this
		}).done(function(data){
			this.props = data
			this.setState({
				loggedIn: false
			})
		})
	}

}

module.exports = User