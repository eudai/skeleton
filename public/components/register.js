var React = require('react')
var ReactDOM = require('react-dom')
var User = require('../models/user.js')
var ReactStrap = require('reactstrap')
var Button = ReactStrap.Button
var Form = ReactStrap.Form
var FormGroup = ReactStrap.FormGroup
var Label = ReactStrap.Label
var Input = ReactStrap.Input
var FormText = ReactStrap.FormText
var moment = require('moment')
var User = require('../models/user.js')

class Register extends React.Component {

	constructor(props){
		super(props)
	}

	submit(event){
		event.preventDefault()
		var form = event.target.elements
		var birthdate = form.birthdate.value ? moment(form.birthdate.value).format() : null
		var user = new User
		user.save({
			email: form.email.value,
			username: form.username.value,
			password: form.password.value,
			first: form.first.value,
			middle: form.middle.value,
			last: form.last.value,
			display: form.display.value,
			birthdate: birthdate
		}).done(function(){
			location.href = '#login'
		}).fail(function(res){
			alert(res.responseText)
		})
	}

	render(){
		return (
			<Form onSubmit={this.submit.bind(this)}>
				<FormGroup>
					<Label>Email</Label>
					<Input type="email" name="email"/>
				</FormGroup>
				<FormGroup>
					<Label>Username</Label>
					<Input type="text" name="username"/>
				</FormGroup>
				<FormGroup>
					<Label>Password</Label>
					<Input type="password" name="password"/>
				</FormGroup>
				<FormGroup>
					<Label>First Name</Label>
					<Input type="text" name="first"/>
				</FormGroup>
				<FormGroup>
					<Label>Middle Name</Label>
					<Input type="text" name="middle"/>
				</FormGroup>
				<FormGroup>
					<Label>Last Name</Label>
					<Input type="text" name="last"/>
				</FormGroup>
				<FormGroup>
					<Label>Display Name</Label>
					<Input type="text" name="display"/>
				</FormGroup>
				<FormGroup>
					<Label>Birth Date</Label>
					<Input type="date" name="birthdate"/>
				</FormGroup>
				<Button type='submit'>Submit</Button>
			</Form>
		)
	}

}

module.exports = Register