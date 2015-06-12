import AppDispatcher from "../dispatcher/AppDispatcher.js";
import {EventEmitter} from "events";
import DataProvider from "../network/DataProvider.js";
import assign from "object-assign";

let ImageStore = {};
let _images = [];

assign(ImageStore, EventEmitter.prototype, {
	loadInitialImages: function() {
		DataProvider.getData({
			url: "/images",
			onSuccess: function(res) {
				let images = res.datas;
				_images.push(...images);
				ImageStore.emitChange();
			}
		});
	},
	loadMoreImages: function() {
		DataProvider.getData({
			url: "/moreImages",
			onSuccess: function(res) {
				let images = res.datas;
				_images.push(...images);
				ImageStore.emitChange();
			}
		});
	},
	getImages: function() {
		return 	_images;
	},
	emitChange : function(){
		this.emit("change");
	},
	onChange: function(changeListener) {
		this.on("change", changeListener);
	}
});

AppDispatcher.register(function(action) {
	switch(action.actionType) {
		case "fetchInitImages" : 
			ImageStore.loadInitialImages();
			break;
		case "fetchMoreImages" :
			ImageStore.loadMoreImages();
			break;
		
	}
});

export default ImageStore;