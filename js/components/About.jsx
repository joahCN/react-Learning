import React from "react/addons";
import Router from "react-router";

var {RouteHandler, Link} = Router;

export class About extends React.Component {
	render() {
		return (
			<div>
				<div>You wan't know me?</div>
				<Link to="company">company</Link>
				<RouteHandler/>
			</div>
		);
	}
}

export class Company extends React.Component {
	render() {
		return (
			<div>This is my company</div>
		);
	}
}