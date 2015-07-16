import React from "react";
import ItemCategory from "./ItemCategory.jsx";
import ItemList from "./ItemList.jsx";
import Bootstrap from "react-bootstrap";
import ItemStore from "../stores/ItemStore.js";
import ItemAction from "../actions/ItemActions.js";
import BaseComponent from "../core/BaseComponent.js";
import AppDispatcher from "../dispatcher/AppDispatcher.js";

let {Grid, Row, Col, Input, Button} = Bootstrap;

export default class ProductDisplay extends BaseComponent {

	constructor() {
		super({
			items: {}
		});
		// this.state = {
		// 	items: {}
		// };
	}

	componentWillMount() {

		// ItemStore.addListener("loaded", (function() {
		// 	let items = ItemStore.getItems();
		// 	this.setState({items: items});
		// }).bind(this));
	}

	componentDidMount() {
		super.componentDidMount();
		this.addEvent(ItemStore, ItemStore.events.loaded, (function() {
			let items = ItemStore.getItems();
			this.updateState({items: items});
		}).bind(this));
		AppDispatcher.pub(ItemStore.events.loadLatestItem);
		// ItemAction.loadLatestItem();
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
