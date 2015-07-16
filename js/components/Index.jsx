import React from "react";
import NavSlider from "./NavSlider.jsx";
import ProductDisplay from "./ProductDisplay.jsx";
import NavBarStore from "../stores/NavBarStore.js";
import Bootstrap from "react-bootstrap";
import AppDispatcher from "../dispatcher/AppDispatcher.js";

let {Button, Glyphicon} = Bootstrap;

export default class Index extends React.Component {

	componentDidMount() {
		AppDispatcher.pub(NavBarStore.events.updateNavBar, {
			buttons: {
				left: (<Button onClick={() => AppDispatcher.pub(NavBarStore.events.slidePage)}><Glyphicon glyph='list' /></Button>),
				center: "Group Design",
				right: ""
			}
		});
		// NavBarAction.updateNavBar({
		// 		left: (<Button onClick={NavBarAction.SlidePage}><Glyphicon glyph='list' /></Button>),
		// 		center: "Group Design",
		// 		right: ""
		// 	});
	}

	render() {
		return (
			<div>
				<NavSlider />
				<ProductDisplay/>
			</div>
		);
	}
}
