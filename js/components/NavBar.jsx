import React from "react";
import Bootstrap from "react-bootstrap";
import Router from "react-router";

let {Navbar, Nav, NavItem} = Bootstrap;
let {RouteHandler, Link} = Router;

export default class NavBar extends React.Component {
	
	render() {
		return (
			<Navbar brand={<a href="#">Group Design</a>}>
			    <Nav>
					<li><Link to="main">main</Link></li>
			      	<li><Link to="about">about</Link></li>
			    </Nav>
			</Navbar>
		);
	}
}