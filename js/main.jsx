import React from "react";
require("../css/main.less");

class ImageItem extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (<div className="imageItem">
			<img src={this.props.url}/>
			<p style={{textAlign: "center", color: "red", fontSize: "15px"}}>{this.props.desc}</p>
		</div>);
	}
}

export default class CommentBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imags: [
				{url: "http://placehold.it/150x150", desc: "hello world"},
				{url: "http://placehold.it/150x150", desc: "It's rainy"},
				{url: "http://placehold.it/150x150", desc: "weekend is comming"},
				{url: "http://placehold.it/150x150", desc: "hot deployment"}
			]
		};
		this.handleLoadMore = () =>  {
			var additionals = [
				{url: "http://placehold.it/150x150", desc: "additional"},
				{url: "http://placehold.it/150x150", desc: "additional"}
			];
			this.setState({imags: this.state.imags.concat(additionals)});
		}
	}

	componentDidMount() {
		console.log("component mount");
	}
	
	render() {
		var items = this.state.imags.map(function(img) {
			return <ImageItem {...img} /> 
		});
		return (<div>
			{items}
			<button onClick={this.handleLoadMore}>show more</button>
		</div>);
	}
}
