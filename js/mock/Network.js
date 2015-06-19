var request = require("superagent") ;

var config = [{
	pattern: "(\\w+)",
	fixtures: function(match, params) {
		if(match[1] == "images") {
			return [
				{url: "http://placehold.it/1170x250", desc: "hello world"},
				{url: "http://placehold.it/1170x250", desc: "It's rainy"},
				{url: "http://placehold.it/1170x250", desc: "weekend is comming"},
				{url: "http://placehold.it/1170x250", desc: "hot deployment"}
			];
		} 
		else if(match[1] == "moreImages") {
			return [
				{url: "http://placehold.it/150x150", desc: "additional"},
				{url: "http://placehold.it/150x150", desc: "additional"}
			];
		}
		else if(match[1] == "latestItems") {
			return [
				{
					img: "http://placehold.it/350x200",
					desc: "desc",
					title: "title",
					id: 1
				},
				{
					img: "http://placehold.it/350x200",
					desc: "desc",
					title: "title",
					id: 2
				},
				{
					img: "http://placehold.it/350x200",
					desc: "desc",
					title: "title",
					id: 3
				},
				{
					img: "http://placehold.it/350x200",
					desc: "desc",
					title: "title",
					id: 4
				},
				{
					img: "http://placehold.it/350x200",
					desc: "desc",
					title: "title",
					id: 5
				},
				{
					img: "http://placehold.it/350x200",
					desc: "desc",
					title: "title",
					id: 6
				}
			];
		}
	},
	callback: function(match, data) {
		return {
			ok: true,
			datas: data
		}
	}	
},
{
	pattern: "(itemDetail/\\d)",
	fixtures: function(match, params) {
		if(match[1] == "item") {
			return {
				img: "http://placehold.it/350x200",
				desc: "desc",
				title: "title",
				id: 1
			};
		}	
	},
	callback: function(match, data) {
		return {
			ok: true,
			datas: data
		};
	}
}
];

require('superagent-mock')(request, config);