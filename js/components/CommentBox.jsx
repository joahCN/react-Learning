import React from "react";
require("../../css/main.less");
import Bootstrap from "react-bootstrap";
import ImageStore from "../stores/ImageStore.js";
import ImageActions from "../actions/ImageActions.js";

let Button = Bootstrap.Button;
let Carousel = Bootstrap.Carousel;
let CarouselItem = Bootstrap.CarouselItem;

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
			imags: []
		};
		this.handleLoadMore = () =>  {
			ImageActions.loadMoreImages();
		}
	}
	
	componentDidMount() {
		ImageStore.onChange((function() {
			this.setState({imags: ImageStore.getImages()});
		}).bind(this));
		
		ImageActions.load();
		
	}
	
	render() {
		var items = this.state.imags.map(function(imgData) {
				return (<CarouselItem>
					<img src={imgData.url} />
				</CarouselItem>); 
			});
		return (
			<Carousel>
				{items}
			</Carousel>
		);
	}
	
	render1() {
		var items = this.state.imags.map(function(img) {
			return <ImageItem {...img} /> 
		});
		return (<div>
			{items}
			<Button bsStyle='primary' onClick={this.handleLoadMore}>show more</Button>
		</div>);
	}
}
