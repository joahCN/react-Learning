import React from "react";
import Bootstrap from "react-bootstrap";
import Router from "react-router";

let {Grid, Row, Col, Navbar, Nav, NavItem, Button, Glyphicon} = Bootstrap;
let {RouteHandler, Link} = Router;

export default class NavBar extends React.Component {

	componentDidMount() {
		
	}
	
	navBarClickHandle() {
		let navBarClick = this.props.navBarClick;
		navBarClick();
	}
	
	render() {
		return (
			<div>
				<Navbar className="hidden-xs" brand={<a href="#">Group Design</a>}>
				    <Nav>
						<li><Link to="main">main</Link></li>
				      	<li><Link to="about">about</Link></li>
				    </Nav>
				</Navbar>
				<div className="phoneNav visible-xs-table navbar navbar-default">
					<div className="leftButton">
						<Button onClick={this.navBarClickHandle.bind(this)}><Glyphicon glyph='list' /></Button>	
					</div>
					<div className="titleBar">
						<span>Group Design</span>
					</div>
					<div className="rightButton">
					</div>
					
				</div>	
			</div>
			
		);
	}
}