import React from "react/addons";
import Router from "react-router";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import NavBarStore from "./stores/NavBarStore.js";
import BaseComponent from "./core/BaseComponent.js";

require("../css/animate.less");
require("bootstrap/dist/css/bootstrap.css");

var {RouteHandler, Link} = Router;
var TransitionGroup = React.addons.CSSTransitionGroup;

export default class APP extends BaseComponent{
	constructor() {
		let initalState = {
			className: {
				mainPage: "page",
				sideBarPage: "sideNavPage",
				transition: "page-transform"
			}
		};
		super(initalState);

		this.direction = ">";

		this.slidePageListener = () => {
			console.log("remove slide");
			this.triggleNavBar();
		};
		this.goBack = () => {
			this.direction = "<";
			this.context.router.goBack();
		}
	}

	componentDidMount() {
		super.componentDidMount();
		this.addEvent(NavBarStore, NavBarStore.events.slidePage, this.slidePageListener);
		this.addEvent(NavBarStore, NavBarStore.events.back, this.goBack);
	}

	componentDidUpdate() {
		this.direction = ">";
	}

	componentWillUnmount() {
		super.componentWillUnmount();
	}

	getTranslationClass() {
		if(this.direction == ">") {
			return "page-transform";
		} else {
			return "page-transform-back";
		}
	}

	triggleNavBar() {
		let state = this.state.className;

		function triggleState(stateName, value) {
			let stateValue;
			if(state[stateName].indexOf(value) > -1) {
				stateValue = state[stateName].replace(value, "");
			} else {
				stateValue = state[stateName] += " "+value;
			}
			state[stateName] = stateValue;
		}

		triggleState("mainPage", "pageMove");
		triggleState("sideBarPage", "sideNavPageMove");

		this.setState(state);

	}

	render() {
		var name = this.context.router.getCurrentPath();
		var key = name.split('/')[1] || 'root';
		var initClassName = this.state.className;
		var transitonCls = this.getTranslationClass();
		return (
			<div className="basePage">
				<div className={initClassName.mainPage}>
					<Header></Header>
					<NavBar/>
					<div className="content">
						<TransitionGroup component="div" transitionName={transitonCls}>
				          <RouteHandler key={key} />
				        </TransitionGroup>
					</div>
					<Footer/>
			   	</div>
				<div className={initClassName.sideBarPage}>
					<h3><Link to="main" onClick={this.triggleNavBar.bind(this)}>main</Link></h3>
					<h3><Link to="about" onClick={this.triggleNavBar.bind(this)}>about</Link></h3>
				</div>
			</div>
		)
	}
}
APP.contextTypes = {
  router: React.PropTypes.func.isRequired
};
