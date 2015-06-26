import AppDispatcher from "../dispatcher/AppDispatcher.js";
import {EventEmitter} from "events";
import DataProvider from "../network/DataProvider.js";
import assign from "object-assign";
import _ from "underscore";

let ItemStore = {};
let _items = [];

assign(ItemStore, EventEmitter.prototype, {
	loadLatestItems: function() {
		DataProvider.getData({
			url: "/latestItems",
			onSuccess: function(res) {
				let items = res.datas;
				_items.push(...items);
				ItemStore.fire("loaded");
			}
		});
	},
	loadItem: function(itemId) {
		let findItem = _.find(_items, function(item) {
			return item.id == itemId;
		});
		if(findItem) {
			ItemStore.fire("loadItem");
			return;
		}
		_.templateSettings = {interpolate: /:(\\w)/g};
		let url = _.template("/item/:id")({id: itemId});
		DataProvider.getData({
			url: url,
			onSuccess: function(res) {
				let items = res.datas;
				_items.push(...items);
				ItemStore.fire("loadItem");
			}
		});
	},
	getItems: function() {
		return _items;
	},
	getItem: function(id) {
		let findItem = _.find(_items, function(item) {
			return item.id == id;
		});
		return findItem;
	},
	fire : function(event){
		this.emit(event);
	},
	addListener: function(event,changeListener) {
		this.on(event, changeListener);
	},
	removeEvent: function(event, listener) {
		this.removeListener(event, listener);
	}
});

AppDispatcher.register(function(action) {
	switch(action.actionType) {
		case "loadLatestItem" : 
			ItemStore.loadLatestItems();
			break;
		case "loadItem" :
			ItemStore.loadItem(action.id);
			break;
		
	}
});

export default ItemStore;