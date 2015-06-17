import React from "react";
import Bootstrap from "react-bootstrap";
import Item from "./Item.jsx";

let {Grid, Row, Col, Input, Button} = Bootstrap;

export default class ItemList extends React.Component {
	render() {
		let items = this.props.items;
		let rows = [];
		for(let i =0 , len = items.length; i<len; i++) {
			rows.push(
				<Row>
					<Col md={4}><Item item={items[i]}/></Col>
					<Col md={4}><Item item={items[i++]}/></Col>
					<Col md={4}><Item item={items[i++]}/></Col>
				</Row>
			);
		}
		return (
			<div className="itemList">
				{rows}
			</div>
		);
	}
}