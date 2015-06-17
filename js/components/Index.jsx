import React from "react";
import NavSlider from "./NavSlider.jsx";
import ProductDisplay from "./ProductDisplay.jsx";

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<NavSlider />
				<ProductDisplay/>
			</div>
		);
	}
}