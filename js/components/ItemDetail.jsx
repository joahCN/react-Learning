import React from "react";
import Router from "react-router";
import Bootstrap from "react-bootstrap";
import ItemStore from "../stores/ItemStore.js";
import BaseComponent from "../core/BaseComponent.js"
import AppDispatcher from "../dispatcher/AppDispatcher.js";
import NavBarStore from "../stores/NavBarStore.js";

let {Grid, Row, Col, Input, Button, TabbedArea, TabPane, Glyphicon} = Bootstrap;

export default class ItemDetail extends BaseComponent {



	constructor() {
		super({
			key: 1
		});

		this.itemLoadedHandler = () => {
			let item = ItemStore.getItem(this.props.params.id);
			this.updateState({
				item: item
			});
		}
	}

	componentDidMount() {
		super.componentDidMount();
		this.addEvent(ItemStore, ItemStore.events.loadItem, this.itemLoadedHandler);
		AppDispatcher.pub(ItemStore.events.loadItem, {id: this.props.params.id});
		AppDispatcher.pub(NavBarStore.events.updateNavBar, {
			buttons: {
				left: (<Button onClick={() => AppDispatcher.pub(NavBarStore.events.back)}><Glyphicon glyph='chevron-left' /></Button>),
				center: "item detail",
				right: ""
			}
		});

		// ItemStore.addListener("loadItem", this.itemLoadedHandler);
		// ItemAction.loadItem(this.props.params.id);

		// NavBarAction.updateNavBar({
		// 		left: (<Button onClick={NavBarAction.goBack}><Glyphicon glyph='chevron-left' /></Button>),
		// 		center: "item detail",
		// 		right: ""
		// 	});
	}

	componentWillUnmount() {
		super.componentWillUnmount();
		// ItemStore.removeEvent("loadItem", this.itemLoadedHandler);
	}

	handleSelect(key) {
		this.setState({
			key: key
		});
	}


	render() {
		let itemId = this.props.params.id;
		let itemDetail = ItemStore.getItem(itemId) || {};
		return (
			<Grid className="itemDetail">
				<Row>
					<Col md={4}>
						<img className="itemImage" src={itemDetail.img}/>
					</Col>
					<Col md={8}>
						<p>{itemDetail.title}</p>
						<p>{itemDetail.desc}</p>
					</Col>
				</Row>
				<Row className="itemSections">
					<Col md={12}>
						<TabbedArea activeKey={this.state.key} onSelect={this.handleSelect.bind(this)}>
					        <TabPane eventKey={1} tab='detail'>tabpane 1</TabPane>
					        <TabPane eventKey={2} tab='size'>TabPane 2 content</TabPane>
					        <TabPane eventKey={3} tab='comment'>TabPane 3 content</TabPane>
					    </TabbedArea>
					</Col>
				</Row>
			</Grid>
		);
	}
}

ItemDetail.contextTypes = {
  router: React.PropTypes.func.isRequired
};
