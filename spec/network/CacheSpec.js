import Cache from "../../js/network/Cache.js";

describe("test cache", function() {
	var cache = new Cache();
	it("create cache object", function() {
		expect(true).toEqual(cache instanceof Cache);
	});
	it("add cache item", function() {
		cache.set("cache1", {name: "joah", sex: "male"}, 20000);
		var cacheValue = cache.get("cache1");
		expect({name: "joah", sex: "male"}).toEqual(cacheValue);
	});
});

describe("test promise", function() {
	var promise, result=0;
	beforeEach(function(done) {
		promise = Promise.resolve(1);
		promise.then(function(value) {
			return value ++;
		}).then(function(value) {
			result = ++value;
			done();
		});
	});
	it("promise.then", function(done) {
		expect(1).toEqual(result);
		done();
	})
});