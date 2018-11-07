var React = require('react')
var reactstrap = require('reactstrap')
var Collapse = reactstrap.Collapse
var Navbar = reactstrap.Navbar
var NavbarToggler = reactstrap.NavbarToggler
var NavbarBrand = reactstrap.NavbarBrand
var Nav = reactstrap.Nav
var NavItem = reactstrap.NavItem
var NavLink = reactstrap.NavLink
var UncontrolledDropdown = reactstrap.UncontrolledDropdown
var DropdownToggle = reactstrap.DropdownToggle
var DropdownMenu = reactstrap.DropdownMenu
var DropdownItem = reactstrap.DropdownItem
var User = require('./user.js')

class Toolbar extends React.Component {

	constructor(props) {
		super(props)
		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: false
		}
		props.user.on('change',this.update,this)
	}

	update(user){
		this.setState({
			user: user
		})
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	close(){
		this.setState({
			isOpen: false
		})
	}

	logout(){
		app.user.logout().done(function(){
			location.href = '#login'
		})
	}
	
	render() {
		return (
			<Navbar className='mb-3' color='dark' dark expand='md'>
				<NavbarBrand href='/'>Skeleton</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className='ml-auto' navbar onClick={this.close.bind(this)}>
						<NavItem hidden={!!this.props.user.id}>
							<NavLink href='#/register'>Register</NavLink>
						</NavItem>
						<NavItem hidden={!!this.props.user.id}>
							<NavLink href='#/login'>Log In</NavLink>
						</NavItem>
						<NavItem hidden={!this.props.user.id}>
							<NavLink href='#/home'>Home</NavLink>
						</NavItem>
						<NavItem hidden={!this.props.user.id}>
							<NavLink href='#/account'>Account</NavLink>
						</NavItem>
						<NavItem hidden={!this.props.user.id}>
							<NavLink onClick={this.logout}>Log Out</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		)
	}

}


module.exports = Toolbar