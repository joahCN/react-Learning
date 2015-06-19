import AppDispatcher from "../dispatcher/AppDispatcher.js";

module.exports = {
	loadLatestItem: function() {
		AppDispatcher.dispatch({
			actionType: "loadLatestItem"
		});
	},
	loadItem: function(itemId) {
		AppDispatcher.dispatch({
			actionType: "loadItem",
			id: itemId
		});
	}
	
};