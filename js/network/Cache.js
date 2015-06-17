export default class Cache {
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
		return isAvailible ? obj.result : null;
	}
	getCacheObject() {
		return this.cache;
	}
}