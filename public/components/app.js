var React = require('react')
var Cortex = require('cortex')
var ReactRouter = require('react-router-dom')
var HashRouter = ReactRouter.HashRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch
var Toolbar = require('./toolbar')
var User = require('./user.js')
var Home = require('./home.js')
var Login = require('./login.js')


class App extends React.Component {

	constructor(props){
		super(props)
		this.user = new Cortex({},function(user){
			toolbar.setProps({ user: user })
		})
		this.user
	}

	logout(){
		this.user.logout()
	}

	render(){
		return (
			<div id='app'>
				<Toolbar user={this.user} />
				<div className='viewport'>
					<HashRouter>
						<Switch>
							<Route path="/home" component={Home}/>
							<Route path="/login" component={Login}/>
						</Switch>
					</HashRouter>
				</div>
			</div>
		)
	}

}

module.exports = App