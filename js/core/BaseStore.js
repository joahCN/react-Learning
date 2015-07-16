import {EventEmitter} from "events";
import _ from "underscore";

export default class BaseStore extends EventEmitter {
    constructor() {
        super();
        this.events = {};
        this.addListener = (event, handler) => {
            this.on(event, handler);
        };
        this.deleteListener = (event, handler) => {
            this.removeListener(event, handler);
        };
        this.deleteAllListener = (event) => {
            this.removeListener(event);
        };
        this.fireListener = (event) => {
            this.emit(event);
        }
    }
    addEvents(events) {
        if(_.isArray(events)) {
            events.forEach((function(event) {
                this.events[event] = event;
            }).bind(this));
        } else {
            throw new Error("Store::bad events");
        }
    }

}
