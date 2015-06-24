import React from "react/addons";
import Router from "react-router";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
require("../css/animate.less");
require("bootstrap/dist/css/bootstrap.css");

var {RouteHandler, Link} = Router;
var TransitionGroup = React.addons.CSSTransitionGroup;

export default class APP extends React.Component{
	constructor(params) {
		super(params);
		this.state = {
			mainPage: "page",
			sideBarPage: "visible-xs-block sideNavPage"	
		};
	}
	
	triggleNavBar() {
		let state = this.state;
		
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
		return (
			<div className="basePage">
				<div className={this.state.mainPage}>
					<Header></Header>
					<NavBar navBarClick={this.triggleNavBar.bind(this)}/>
					<div className="content">
						<TransitionGroup component="div" transitionName="page-transform">
				          <RouteHandler key={key} />
				        </TransitionGroup>
					</div>
					<Footer/>
			   	</div>
				<div className={this.state.sideBarPage}>
					<h3><Link to="main">main</Link></h3>
					<h3><Link to="about">about</Link></h3>
				</div>
			</div>
		)
	}
}
APP.contextTypes = {
  router: React.PropTypes.func.isRequired
};



