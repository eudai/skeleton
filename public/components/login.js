var React = require('react')
var ReactStrap = require('reactstrap')
var Button = ReactStrap.Button
var Form = ReactStrap.Form
var FormGroup = ReactStrap.FormGroup
var Label = ReactStrap.Label
var Input = ReactStrap.Input
var FormText = ReactStrap.FormText

class Login extends React.Component {

	constructor(props){
		super(props)
		props.user.on('change',this.update,this)
	}

	update(user){
		if (user.id){
			location.href = '#home'
		}
	}

	submit(event){
		event.preventDefault()
		var form = event.target
		var username = form.querySelector('[name=username]').value
		var password = form.querySelector('[name=password]').value
		this.props.user.login(username,password).done(function(){
			location.href = '#home'
		})
	}

	render(){
		return (
			<div className='container'>
				<Form onSubmit={this.submit.bind(this)}>
					<FormGroup>
						<Label>Username</Label>
						<Input name='username' />
					</FormGroup>
					<FormGroup>
						<Label>Password</Label>
						<Input name='password' type='password' />
					</FormGroup>
					<Button type='submit'>Submit</Button>
				</Form>
			</div>
		)
	}

}

module.exports = Login