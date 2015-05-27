import React from "react";
import Router from "react-router";
import CommentBox from "js/main.jsx"

var {Route, RouteHandler, HashLocation,Link} = Router;

class APP extends React.Component{
	render() {
		return (<div>
	    	<h1>App</h1>
			<ul>
				<li><Link to="main">main</Link></li>
				<li><Link to="about">about</Link></li>
			</ul>
	        <RouteHandler/>
	   	</div>)
	}
}

class About extends React.Component {
	render() {
		return (
			<div>You wan't know me?</div>
		);
	}
}

var routes = (
	<Route path="/" handler={APP}>
		<Route name="main" handler={CommentBox}></Route>
		<Route name="about" handler={About}></Route>
	</Route>
);


Router.run(routes, HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});