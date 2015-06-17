import React from "react";
require("../../css/main.less");
import Bootstrap from "react-bootstrap";
import ImageStore from "../stores/ImageStore.js";
import ImageActions from "../actions/ImageActions.js";

let {Grid, Row, Col, Input, Button} = Bootstrap;

let Carousel = Bootstrap.Carousel;
let CarouselItem = Bootstrap.CarouselItem;

export default class NavSlider extends React.Component {
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
			<Grid className="navSlider">
				<Row>
					<Col md={12}>
						<Carousel className="carousel">
							{items}
						</Carousel>
					</Col>
				</Row>
			</Grid>
		);
	}
	
}
