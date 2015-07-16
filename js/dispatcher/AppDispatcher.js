import {Dispatcher} from "flux";
import _ from "underscore";

// let dispatcher = new Dispatcher();

class DispatcherCenter extends Dispatcher {
    constructor() {
        super();
        this.actions = {};
    }
    sub(actions) {
        _.each(actions, (function(handler, actionType) {
            this.actions[actionType] = handler;
        }).bind(this));
        super.register((function(action) {
            let handler = this.actions[action.actionType];
            if(_.isFunction(handler)) {
                handler(action);
            }
        }).bind(this));
    }
    pub(actionType, datas) {
        this.dispatch({
            actionType: actionType,
            datas: datas || {}
        });
    }
}

export default new DispatcherCenter();
