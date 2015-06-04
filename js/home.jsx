import React from "react/addons";
import Router from "react-router";
import CommentBox from "js/main.jsx"
require("../css/animate.less");
require("bootstrap/dist/css/bootstrap.css");

var {Route, RouteHandler, HistoryLocation,Link, DefaultRoute, NotFoundRoute, State} = Router;
var TransitionGroup = React.addons.CSSTransitionGroup;

class APP extends React.Component{
	constructor(params) {
		super(params);
	}

	render() {
		var name = this.context.router.getCurrentPath();//this.getCurrentPath();
		return (<div>
	    	<h1>App</h1>
			<ul>
				<li><Link to="main">main</Link></li>
				<li><Link to="about">about</Link></li>
			</ul>
			<TransitionGroup component="div" transitionName="page-transition">
	          <RouteHandler key={name} />
	        </TransitionGroup>
	   	</div>)
	}
}
APP.contextTypes = {
  router: React.PropTypes.func.isRequired
};

class About extends React.Component {
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

class Company extends React.Component {
	render() {
		return (
			<div>This is my company</div>
		);
	}
}

class NotFound extends React.Component {
	render() {
		return (
			<div>Not Found 404</div>
		);
	}
}


var routes = (
	<Route path="/" handler={APP}>
		<DefaultRoute handler={About}/>
		<Route name="main" handler={CommentBox}></Route>
		<Route name="about" handler={About}>
			<Route name="company" handler={Company}/>
		</Route>
		<NotFoundRoute handler={NotFound}/>
	</Route>
);


Router.run(routes, HistoryLocation, (Root) => {
  React.render(<Root/>, document.body);
});