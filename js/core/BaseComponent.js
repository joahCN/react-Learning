import React from "react/addons";
import _ from "underscore";

export default class BaseComponent extends React.Component {
    constructor(states) {
        super();
        this.state = states;
        this.events = [];
        this.updateState = (deltaState) => {
            let states = this.state;
            extendObj(states, deltaState );
            this.setState(states);

            function extendObj(des, src) {
                for (let i in src) {
                    if(src.hasOwnProperty(i)) {
                        if(des[i]) {
                            if(_.isArray(src[i])) {
                                let ay = [];
                                des[i] = ay;
                                extendObj(ay, src[i]);
                            }else if(_.isObject(src[i])) {
                                extendObj(des[i], src[i]);
                            } else {
                                des[i] = src[i];
                            }
                        } else {
                            des[i] = src[i];
                        }
                    }
                }
            }
        }
    }
    addEvent(owner ,eventName, handler) {
        this.events.push({
            owner: owner,
            eventName: eventName,
            handler: handler
        });
        owner.addListener(eventName, handler);
    }
    componentDidMount() {

    }
    componentWillUnmount() {
        this.events.forEach(function({owner, eventName, handler}) {
            owner.deleteListener(eventName, handler);
        });
    }
}
