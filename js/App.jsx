import React from "react/addons";
import Router from "react-router";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
require("../css/animate.less");
require("bootstrap/dist/css/bootstrap.css");

var {RouteHandler, Link} = Router;
var TransitionGroup = React.addons.CSSTransitionGroup;

export default class APP extends React.Component{
	constructor(params) {
		super(params);
	}

	render() {
		var name = this.context.router.getCurrentPath();
		var key = name.split('/')[1] || 'root';
		return (<div className="page">
			<Header></Header>
			<NavBar/>
			<div className="content">
				<TransitionGroup component="div" transitionName="page-transform">
		          <RouteHandler key={key} />
		        </TransitionGroup>
			</div>
			<Footer/>
	   	</div>)
	}
}
APP.contextTypes = {
  router: React.PropTypes.func.isRequired
};



