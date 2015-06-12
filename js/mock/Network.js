var request = require("superagent") ;

var config = [{
	pattern: "(\\w+)",
	fixtures: function(match, params) {
		if(match[1] == "images") {
			return [
				{url: "http://placehold.it/150x150", desc: "hello world"},
				{url: "http://placehold.it/150x150", desc: "It's rainy"},
				{url: "http://placehold.it/150x150", desc: "weekend is comming"},
				{url: "http://placehold.it/150x150", desc: "hot deployment"}
			];
		} 
		else if(match[1] == "moreImages") {
			return [
				{url: "http://placehold.it/150x150", desc: "additional"},
				{url: "http://placehold.it/150x150", desc: "additional"}
			];
		}
	},
	callback: function(match, data) {
		return {
			ok: true,
			datas: data
		}
	}	
}];

require('superagent-mock')(request, config);