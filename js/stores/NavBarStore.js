import AppDispatcher from "../dispatcher/AppDispatcher.js";
import {EventEmitter} from "events";
import assign from "object-assign";
import Bootstrap from "react-bootstrap";
import BaseStore from "../core/BaseStore.js";

let {Button, Glyphicon} = Bootstrap;
// let NavBarStore = {};
let _navBarButtons = {};

class NavBarStore extends BaseStore {
	constructor() {
		super();
		this.addEvents([
			"updateNavBar",
			"slidePage",
			"back"
		]);
	}
	getNavBarButtons() {
		return _navBarButtons;
	}
	setNavBarButtons(buttons) {
		_navBarButtons = buttons;
		this.fireListener("update");
	}
}

let navBarStore = new NavBarStore();

AppDispatcher.sub({
	"updateNavBar": function(action) {
		navBarStore.setNavBarButtons(action.datas.buttons);
	},
	"slidePage": function() {
		navBarStore.fireListener(navBarStore.events.slidePage);
	},
	"back": function() {
		navBarStore.fireListener(navBarStore.events.back);
	}
});


// assign(NavBarStore, EventEmitter.prototype, {
// 	events: {
// 		slidePage: 'slidPage',
// 		back: 'back'
// 	},
// 	getNavBarButtons: function() {
// 		return _navBarButtons;
// 	},
// 	setNavBarButtons: function(buttons) {
// 		_navBarButtons = buttons;
// 		this.fire("update");
// 	},
// 	addListener: function(event, handler) {
// 		this.on(event, handler);
// 	},
// 	fire: function(event) {
// 		this.emit(event);
// 	},
// 	removeEvent: function(event, handler) {
// 		this.removeListener(event, handler);
// 	}
// });

// AppDispatcher.register(function(action) {
// 	switch(action.actionType) {
// 		case 'updateNavBar' :
// 			NavBarStore.setNavBarButtons(action.buttons);
// 			break;
// 		case NavBarStore.events.slidePage :
// 			NavBarStore.fire(NavBarStore.events.slidePage);
// 			break;
// 		case NavBarStore.events.back :
// 			NavBarStore.fire(NavBarStore.events.back);
// 			break;
// 	}
// });

export default navBarStore;
