import React from "react/addons";
import Router from "react-router";
import APP from "./App.jsx";
import {About, Company} from "./components/About.jsx";
import NavSlider from "./components/NavSlider.jsx";
import NotFound from "./components/NotFound.jsx";
import Index from "./components/Index.jsx";
import ItemDetail from "./components/ItemDetail.jsx";

var {Route, RouteHandler, HistoryLocation, HashLocation,Link, DefaultRoute, NotFoundRoute, State} = Router;

const routes = (
	<Route handler={APP}>
		<DefaultRoute handler={Index}/>
		<Route name="main" handler={Index}></Route>
		<Route path="about" name="about" handler={About}>
			<Route name="company" handler={Company}/>
		</Route>
		<Route path="itemDetail/:id" name="itemDetail" handler={ItemDetail}></Route>
		<NotFoundRoute handler={NotFound}/>
	</Route>
);
export default routes;