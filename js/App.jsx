import React from "react/addons";
import Router from "react-router";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import NavBarStore from "./stores/NavBarStore.js";
require("../css/animate.less");
require("bootstrap/dist/css/bootstrap.css");

var {RouteHandler, Link} = Router;
var TransitionGroup = React.addons.CSSTransitionGroup;

export default class APP extends React.Component{
	constructor(params) {
		super(params);
		this.state = {
			className: {
				mainPage: "page",
				sideBarPage: "sideNavPage",
				transition: "page-transform"	
			}
		};
		this.slidePageListener = () => {
			console.log("remove slide");
			this.triggleNavBar();
		};
		this.goBack = () => {
			console.log("remove back");
			this.state.className.transition = "page-transform-back";
			this.context.router.goBack();
		}
	}
	
	componentDidMount() {
		NavBarStore.addListener(NavBarStore.events.slidePage, this.slidePageListener);
		
		NavBarStore.addListener(NavBarStore.events.back, this.goBack);
	}
	
	componentDidUpdate() {
		this.state.className.transition = "page-transform";
	}
	
	componentWillUnmount() {
		NavBarStore.removeEvent(NavBarStore.events.slidePage, this.slidePageListener);
		NavBarStore.removeEvent(NavBarStore.events.back, this.goBack);
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
	
	goBack() {
		
	}

	render() {
		var name = this.context.router.getCurrentPath();
		var key = name.split('/')[1] || 'root';
		var initClassName = this.state.className;
		return (
			<div className="basePage">
				<div className={initClassName.mainPage}>
					<Header></Header>
					<NavBar/>
					<div className="content">
						<TransitionGroup component="div" transitionName={initClassName.transition}>
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



