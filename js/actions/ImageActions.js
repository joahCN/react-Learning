import AppDispatcher from "../dispatcher/AppDispatcher.js";

module.exports = {
	load: function() {
		AppDispatcher.dispatch({
			actionType: "fetchInitImages"
		});
	},
	loadMoreImages: function() {
		AppDispatcher.dispatch({
			actionType: "fetchMoreImages"
		});
	}
};