import AppDispatcher from "../dispatcher/AppDispatcher.js";
import {EventEmitter} from "events";
import assign from "object-assign";
import Bootstrap from "react-bootstrap";

let {Button, Glyphicon} = Bootstrap;
let NavBarStore = {};
let _navBarButtons = {};

assign(NavBarStore, EventEmitter.prototype, {
	events: {
		slidePage: 'slidPage',
		back: 'back'	
	},
	getNavBarButtons: function() {
		return _navBarButtons;
	},
	setNavBarButtons: function(buttons) {
		_navBarButtons = buttons;
		this.fire("update");
	},
	addListener: function(event, handler) {
		this.on(event, handler);
	},
	fire: function(event) {
		this.emit(event);
	},
	removeEvent: function(event, handler) {
		this.removeListener(event, handler);
	}
});

AppDispatcher.register(function(action) {
	switch(action.actionType) {
		case 'updateNavBar' :
			NavBarStore.setNavBarButtons(action.buttons);
			break;
		case NavBarStore.events.slidePage : 
			NavBarStore.fire(NavBarStore.events.slidePage);
			break;
		case NavBarStore.events.back :
			NavBarStore.fire(NavBarStore.events.back);
			break;
	}
});

export default NavBarStore;