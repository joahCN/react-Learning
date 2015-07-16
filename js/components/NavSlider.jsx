import React from "react";
require("../../css/main.less");
import Bootstrap from "react-bootstrap";
import ImageStore from "../stores/ImageStore.js";
import ImageActions from "../actions/ImageActions.js";
import BaseComponent from "../core/BaseComponent.js";
import AppDispatcher from "../dispatcher/AppDispatcher.js";

let {Grid, Row, Col, Input, Button} = Bootstrap;

let Carousel = Bootstrap.Carousel;
let CarouselItem = Bootstrap.CarouselItem;

export default class NavSlider extends BaseComponent {
	constructor() {
		super({
			imags: []
		});
		this.handleLoadMore = () =>  {
			AppDispatcher.pub(ImageStore.events.fetchMoreImages);
		}
	}

	componentDidMount() {
		this.addEvent(ImageStore, ImageStore.events.change, (function() {
			this.setState({imags: ImageStore.getImages()});
		}).bind(this));
		AppDispatcher.pub(ImageStore.events.fetchInitImages);
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
