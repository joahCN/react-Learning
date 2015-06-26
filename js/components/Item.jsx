import React from "react";
import Bootstrap from "react-bootstrap";
import Router from "react-router";

let {Thumbnail, Button} = Bootstrap;
let {Link} = Router;

export default class Item extends React.Component {
	
	render() {
		let item = this.props.item;
		return (
			<Thumbnail src={item.img} alt= {item.desc}>
		        <h3>{item.desc}</h3>
		        <p>Description</p>
		        <p>
		          <Link to="itemDetail" params={{id: item.id}}><Button bsStyle='primary'>{item.title}</Button></Link>&nbsp;
		        </p>
		    </Thumbnail>
		);
	}
}