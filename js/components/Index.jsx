import React from "react";
import NavSlider from "./NavSlider.jsx";
import ProductDisplay from "./ProductDisplay.jsx";
import NavBarAction from "../actions/NavBarActions.js";
import Bootstrap from "react-bootstrap";
let {Button, Glyphicon} = Bootstrap;

export default class Index extends React.Component {
	
	componentDidMount() {
		NavBarAction.updateNavBar({
				left: (<Button onClick={NavBarAction.SlidePage}><Glyphicon glyph='list' /></Button>),
				center: "Group Design",
				right: ""
			});
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