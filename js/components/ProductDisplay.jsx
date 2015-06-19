import React from "react";
import ItemCategory from "./ItemCategory.jsx";
import ItemList from "./ItemList.jsx";
import Bootstrap from "react-bootstrap";
import ItemStore from "../stores/ItemStore.js";
import ItemAction from "../actions/ItemActions.js";

let {Grid, Row, Col, Input, Button} = Bootstrap;

export default class ProductDisplay extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			items: {}
		};
	}
	
	componentWillMount() {
		ItemStore.addListener("loaded", (function() {
			let items = ItemStore.getItems();
			this.setState({items: items});
		}).bind(this));
	}
	
	componentDidMount() {
		ItemAction.loadLatestItem();
	}
	
	render() {
		let category = {
			header: "Daily Products",
			items: [
				{
					name: "abc"
				},
				{
					name: "def"
				},
				{
					name: "ghi"
				}
			]
		};
		let items = this.state.items;
		return (
			<Grid>
				<Row>
					<Col md={12}>
						<ItemCategory category = {category}/>
					</Col>
				</Row>
				<ItemList items = {items}/>
				<Row>
					<Col md={12}>
						<ItemCategory category = {category}/>
					</Col>
				</Row>
				<ItemList items = {items}/>
			</Grid>
		)
	}
}