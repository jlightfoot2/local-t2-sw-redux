"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
class ServiceWorkerStatus extends React.Component {
    constructor() {
        super(...arguments);
        this.dateToTimeStamp = (date) => {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            let hoursS = "" + hours;
            let minutesS = "" + minutes;
            let secondsS = "" + seconds;
            if (hours < 10) {
                hoursS = "0" + hours;
            }
            if (minutes < 10) {
                minutesS = "0" + minutes;
            }
            if (seconds < 10) {
                secondsS = "0" + seconds;
            }
            return hoursS + ':' + minutesS + ':' + secondsS;
        };
        this.timestampToDateString = (secondsEpoch) => {
            let d = new Date(0);
            d.setUTCSeconds(secondsEpoch);
            var mm = d.getMonth() + 1; // getMonth() is zero-based
            var dd = d.getDate();
            var seconds = d.getSeconds();
            var timeStamp = this.dateToTimeStamp(d);
            let res = [d.getFullYear(),
                (mm > 9 ? '' : '0') + mm,
                (dd > 9 ? '' : '0') + dd
            ].join('-') + ' ' + timeStamp;
            return res;
        };
    }
    render() {
        var { updates, cache, log, actions, dispatchAction } = this.props;
        console.log(actions);
        return (React.createElement("div", null,
            React.createElement("h1", null, "Service Worker Info"),
            React.createElement("div", { style: styles_1.flexParentRowStyle },
                React.createElement("div", { style: styles_1.flexRowItemStyle },
                    React.createElement("h3", null, "Update Status"),
                    React.createElement("div", null,
                        React.createElement("pre", null, JSON.stringify(updates, undefined, 3))),
                    React.createElement("h3", null, "Cache Status"),
                    React.createElement("div", null,
                        React.createElement("pre", null, JSON.stringify(cache, undefined, 3))),
                    React.createElement("h3", null, "Actions"),
                    actions.map((action, i) => {
                        return (React.createElement("div", { key: i },
                            React.createElement("button", { onClick: dispatchAction(action.actions), type: "button" }, action.name)));
                    })),
                React.createElement("div", { style: styles_1.flexRowItemStyle },
                    React.createElement("h3", null, "SW Event Logs"),
                    log.map((entry, i) => {
                        return (React.createElement("div", { key: i },
                            React.createElement("h4", null,
                                this.timestampToDateString(entry.timestamp),
                                ": ",
                                entry.name),
                            React.createElement("div", null,
                                React.createElement("pre", null, JSON.stringify(entry.info, undefined, 3)))));
                    })))));
    }
}
exports.default = ServiceWorkerStatus;
//# sourceMappingURL=ServiceWorkerStatus.js.map