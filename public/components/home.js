var React = require('react')

class Home extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		return (
			<div className='container'>
				<h1>Welcome home, {this.props.user.get('username')}.</h1>
			</div>
		)
	}

}

module.exports = Home