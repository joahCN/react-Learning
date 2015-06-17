import React from "react";

export default class ItemCategory extends React.Component {
	
	render() {
		let {header, items} = this.props.category;
		let cs = items.map(function(item) {
			return <span className="categoryItem">{item.name}</span>
		});
		return (
			<div className="categoryBar">
				<span className="categoryHeader">{header}</span>
				{cs}
			</div>
		);
	}
}