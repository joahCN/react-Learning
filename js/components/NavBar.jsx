import React from "react";
import Bootstrap from "react-bootstrap";
import Router from "react-router";
import NavBarStore from "../stores/NavBarStore.js";
import NavBarAction from "../actions/NavBarActions.js";

let {Grid, Row, Col, Navbar, Nav, NavItem, Button, Glyphicon} = Bootstrap;
let {RouteHandler, Link} = Router;

export default class NavBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			barButtons: {
				left: (<Button onClick={NavBarAction.SlidePage}><Glyphicon glyph='list' /></Button>),
				center: "Group Design",
				right: ""
			}
		};
		this.updateNavBar = () => {
			let buttons = NavBarStore.getNavBarButtons();
			let state = this.state;
			state.barButtons = buttons;
			this.setState(state);
		}
	}

	componentDidMount() {
		NavBarStore.addListener("update", this.updateNavBar);
	}

	componentWillUnmount() {
		NavBarStore.removeEvent("update", this.updateNavBar);
	}


	render() {
		let barButtons = this.state.barButtons;
		return (
			<div>
				<Navbar className="hidden-xs" brand={<a href="#">Group Design</a>}>
				    <Nav>
						<li><Link to="main">main</Link></li>
				      	<li><Link to="about">about</Link></li>
				    </Nav>
				</Navbar>
				<div className="phoneNav visible-xs-block navbar navbar-default">
					<div className="leftButton">
						{barButtons.left}
					</div>
					<div className="titleBar">
						<span>{barButtons.center}</span>
					</div>
					<div className="rightButton">
						{barButtons.right}
					</div>

				</div>
			</div>

		);
	}
}
