import React from "react";
import ItemCategory from "./ItemCategory.jsx";
import ItemList from "./ItemList.jsx";
import Bootstrap from "react-bootstrap";

let {Grid, Row, Col, Input, Button} = Bootstrap;

export default class ProductDisplay extends React.Component {
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
		let items = [
			{
				img: "http://placehold.it/350x200",
				desc: "goods"
			},
			{
				img: "http://placehold.it/350x200",
				desc: "goods"
			},
			{
				img: "http://placehold.it/350x200",
				desc: "goods"
			},
			{
				img: "http://placehold.it/350x200",
				desc: "goods"
			},
			{
				img: "http://placehold.it/350x200",
				desc: "goods"
			},
			{
				img: "http://placehold.it/350x200",
				desc: "goods"
			}
		];
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