import React from "react/addons";
import Router from "react-router";
import APP from "./App.jsx";
import {About, Company} from "./components/About.jsx";
import CommentBox from "./components/CommentBox.jsx";
import NotFound from "./components/NotFound.jsx";

var {Route, RouteHandler, HistoryLocation, HashLocation,Link, DefaultRoute, NotFoundRoute, State} = Router;

const routes = (
	<Route handler={APP}>
		<DefaultRoute handler={About}/>
		<Route name="main" handler={CommentBox}></Route>
		<Route path="about" name="about" handler={About}>
			<Route name="company" handler={Company}/>
		</Route>
		<NotFoundRoute handler={NotFound}/>
	</Route>
);
export default routes;