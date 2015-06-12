import React from "react/addons";
import Router from "react-router";
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
		return (<div>
	    	<h1>App</h1>
			<ul>
				<li><Link to="main">main</Link></li>
				<li><Link to="about">about</Link></li>
			</ul>
			<div className="container">
				<TransitionGroup component="div" transitionName="page-transform">
		          <RouteHandler key={key} />
		        </TransitionGroup>
			</div>
	   	</div>)
	}
}
APP.contextTypes = {
  router: React.PropTypes.func.isRequired
};



