import AppDispatcher from "../dispatcher/AppDispatcher.js";
import {EventEmitter} from "events";
import DataProvider from "../network/DataProvider.js";
import assign from "object-assign";
import BaseStore from "../core/BaseStore.js";

let _images = [];

class ImageStore extends BaseStore {
	constructor() {
		super();
		this.addEvents([
			"change",
			"fetchInitImages",
			"fetchMoreImages"
		]);
	}
	loadInitialImages() {
		DataProvider.getData({
			url: "/images",
			onSuccess: (function(res) {
				let images = res.datas;
				_images.push(...images);
				this.fireListener(this.events.change);
			}).bind(this)
		});
	}
	loadMoreImages() {
		DataProvider.getData({
			url: "/moreImages",
			onSuccess: (function(res) {
				let images = res.datas;
				_images.push(...images);
				this.fireListener(this.events.change);
				// ImageStore.emitChange();
			}).bind(this)
		});
	}
	getImages() {
		return 	_images;
	}
}

let imageStore = new ImageStore();

AppDispatcher.sub({
	"fetchInitImages" : function() {
		imageStore.loadInitialImages();
	},
	"fetchMoreImages" : function() {
		imageStore.loadMoreImages();
	}
});

// assign(ImageStore, EventEmitter.prototype, {
// 	loadInitialImages: function() {
// 		DataProvider.getData({
// 			url: "/images",
// 			onSuccess: function(res) {
// 				let images = res.datas;
// 				_images.push(...images);
// 				ImageStore.emitChange();
// 			}
// 		});
// 	},
// 	loadMoreImages: function() {
// 		DataProvider.getData({
// 			url: "/moreImages",
// 			onSuccess: function(res) {
// 				let images = res.datas;
// 				_images.push(...images);
// 				ImageStore.emitChange();
// 			}
// 		});
// 	},
// 	getImages: function() {
// 		return 	_images;
// 	},
// 	emitChange : function(){
// 		this.emit("change");
// 	},
// 	onChange: function(changeListener) {
// 		this.on("change", changeListener);
// 	}
// });

// AppDispatcher.register(function(action) {
// 	switch(action.actionType) {
// 		case "fetchInitImages" :
// 			ImageStore.loadInitialImages();
// 			break;
// 		case "fetchMoreImages" :
// 			ImageStore.loadMoreImages();
// 			break;
//
// 	}
// });

export default imageStore;
