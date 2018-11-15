var React = require('react')
var ReactDOM = require('react-dom')
var ReactStrap = require('reactstrap')
var Button = ReactStrap.Button
var Form = ReactStrap.Form
var FormGroup = ReactStrap.FormGroup
var Label = ReactStrap.Label
var Input = ReactStrap.Input
var FormText = ReactStrap.FormText
var moment = require('moment')

class Account extends React.Component {

	constructor(props){
		super(props)
		props.user.on('change',this.load,this)
	}

	submit(event){
		event.preventDefault()
		var form = event.target.elements
		var birthdate = form.birthdate.value ? moment(form.birthdate.value).format() : null
		this.props.user.save({
			email: form.email.value,
			username: form.username.value,
			password: form.password.value,
			first: form.first.value,
			middle: form.middle.value,
			last: form.last.value,
			display: form.display.value,
			birthdate: birthdate
		})
	}

	load(){
		ReactDOM.render(this.render(),document.querySelector('#viewport'))
	}

	render(){
		return (
			<Form onSubmit={this.submit.bind(this)}>
				<FormGroup>
					<Label>Email</Label>
					<Input type="email" name="email" defaultValue={this.props.user.get('email')}/>
				</FormGroup>
				<FormGroup>
					<Label>Username</Label>
					<Input type="text" name="username" defaultValue={this.props.user.get('username')}/>
				</FormGroup>
				<FormGroup>
					<Label>Password</Label>
					<Input type="password" name="password"/>
				</FormGroup>
				<FormGroup>
					<Label>First Name</Label>
					<Input type="text" name="first" defaultValue={this.props.user.get('first')}/>
				</FormGroup>
				<FormGroup>
					<Label>Middle Name</Label>
					<Input type="text" name="middle" defaultValue={this.props.user.get('middle')}/>
				</FormGroup>
				<FormGroup>
					<Label>Last Name</Label>
					<Input type="text" name="last" defaultValue={this.props.user.get('last')}/>
				</FormGroup>
				<FormGroup>
					<Label>Display Name</Label>
					<Input type="text" name="display" defaultValue={this.props.user.get('display')}/>
				</FormGroup>
				<FormGroup>
					<Label>Birth Date</Label>
					<Input type="date" name="birthdate" defaultValue={moment(this.props.user.get('birthdate')).format('YYYY-MM-DD')}/>
				</FormGroup>
				<Button type='submit'>Submit</Button>
			</Form>
		)
	}

}

module.exports = Account