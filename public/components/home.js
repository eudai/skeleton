var React = require('react')

class Home extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		var username = this.props.user.get('username')
		var display = this.props.user.get('display')
		return (
			<div className='container'>
				<h1>Welcome home, { display || username }.</h1>
			</div>
		)
	}

}

module.exports = Home