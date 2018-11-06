var React = require('react')

class Home extends React.Component {

	render(){
		return (
			<div className='container'>
				<h1>Welcome home, {app.user.props.username}.</h1>
			</div>
		)
	}

}

module.exports = Home