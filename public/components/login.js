var React = require('react')
var ReactStrap = require('reactstrap')
var Button = ReactStrap.Button
var Form = ReactStrap.Form
var FormGroup = ReactStrap.FormGroup
var Label = ReactStrap.Label
var Input = ReactStrap.Input
var FormText = ReactStrap.FormText

class Login extends React.Component {

	submit(event){
		event.preventDefault()
		var form = event.target
		var username = form.querySelector('[name=username]').value
		var password = form.querySelector('[name=password]').value
		app.user.login({
			username: username,
			password: password
		}).done(function(){
			location.href = '#home'
		})
	}

	render(){
		return (
			<div className='container'>
				<Form onSubmit={this.submit}>
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