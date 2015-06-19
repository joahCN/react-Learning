import React from "react";
import Bootstrap from "react-bootstrap";
import ItemStore from "../stores/ItemStore.js";
import ItemAction from "../actions/ItemActions.js";

let {Grid, Row, Col, Input, Button, TabbedArea, TabPane} = Bootstrap;

export default class ItemDetail extends React.Component {
	
	
	
	constructor(props) {
		super(props);
		this.state = {
			key: 1
		};
	}
	
	componentWillMount() {
		ItemStore.addListener("loadItem", (function() {
			let item = ItemStore.getItem(this.props.params.id);
			this.setState({
				item: item
			});
		}).bind(this));
		ItemAction.loadItem(this.props.params.id);
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