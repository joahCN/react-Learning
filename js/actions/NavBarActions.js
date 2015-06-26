import AppDispatcher from "../dispatcher/AppDispatcher.js";

module.exports = {
	updateNavBar: function(buttons) {
		AppDispatcher.dispatch({
			actionType: "updateNavBar",
			buttons: buttons
		});
	},
	SlidePage: function() {
		AppDispatcher.dispatch({
			actionType: "slidPage"
		});
	},
	goBack: function() {
		AppDispatcher.dispatch({
			actionType: "back"
		});
	}
	
};