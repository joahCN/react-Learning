import React from "react";
import Bootstrap from "react-bootstrap";

let {Thumbnail, Button} = Bootstrap;

export default class Item extends React.Component {
	
	render() {
		let item = this.props.item;
		return (
			<Thumbnail src={item.img} alt= {item.desc}>
		        <h3>{item.desc}</h3>
		        <p>Description</p>
		        <p>
		          <Button bsStyle='primary'>Buy</Button>&nbsp;
		        </p>
		    </Thumbnail>
		);
	}
}