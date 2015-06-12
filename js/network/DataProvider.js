import request from "superagent";
import _ from "underscore";

require("../mock/Network.js");

class Cache {
	constructor() {
		this.cache = {};
	}
	set(key, value, duration) {
		let expTime = duration ? (new Date().getTime() + duration) : 0;
		this.cache[key] = {
			result: value,
			expire: expTime
		};
	}
	get(key) {
		let obj = this.cache[key];
		let isAvailible = obj && ((obj.expire == 0) || (obj.expire > new Date().getTime()));
		return isAvailible ? obj.value : null;
	}
}

let apiCache = new Cache();


module.exports = {
	getData: function(options) {
		var url = options.url,
			queries = options.queries, 
			params = options.params,
			onError = options.onError, 
			onSuccess = options.onSuccess,
			useCache = options.useCache !== false,
			duration = options.duration || 0;
		
		if(useCache) {
			let formatedUrl = getProxyUrl();
			let value = apiCache.get(formatedUrl);
			if(value) {
				onSuccess(value);
				return;
			}
		}
			
		request.post(url).accept("json").send(params).end(responseHandle);
		
		
		function getProxyUrl() {
			if(params) {
				let keys = Object.keys(params);
				keys.sort();
				let queries = "";
				for(let key in keys) {
					queries += key + "=" + JSON.stringify(params[key] || "") + "&";
				}
				return url + "?" + queries;	
			} else {
				return url;
			}
			
		}		
		
		
		function responseHandle(error, res) {
			if(error) {
				_.isFunction(onError) && onError(error);
			} else {
				let formatedUrl = getProxyUrl();
				apiCache.set(formatedUrl, res, duration);
				onSuccess(res);
			}
		}
	}
};