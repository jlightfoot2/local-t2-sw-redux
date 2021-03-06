"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("./styles");
var ServiceWorkerStatus = (function (_super) {
    __extends(ServiceWorkerStatus, _super);
    function ServiceWorkerStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dateToTimeStamp = function (date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var hoursS = "" + hours;
            var minutesS = "" + minutes;
            var secondsS = "" + seconds;
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
        _this.timestampToDateString = function (secondsEpoch) {
            var d = new Date(0);
            d.setUTCSeconds(secondsEpoch);
            var mm = d.getMonth() + 1; // getMonth() is zero-based
            var dd = d.getDate();
            var seconds = d.getSeconds();
            var timeStamp = _this.dateToTimeStamp(d);
            var res = [d.getFullYear(),
                (mm > 9 ? '' : '0') + mm,
                (dd > 9 ? '' : '0') + dd
            ].join('-') + ' ' + timeStamp;
            return res;
        };
        return _this;
    }
    ServiceWorkerStatus.prototype.render = function () {
        var _this = this;
        var _a = this.props, updates = _a.updates, cache = _a.cache, log = _a.log, actions = _a.actions, dispatchAction = _a.dispatchAction;
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
                    actions.map(function (action, i) {
                        return (React.createElement("div", { key: i },
                            React.createElement("button", { onClick: dispatchAction(action.actions), type: "button" }, action.name)));
                    })),
                React.createElement("div", { style: styles_1.flexRowItemStyle },
                    React.createElement("h3", null, "SW Event Logs"),
                    log.map(function (entry, i) {
                        return (React.createElement("div", { key: i },
                            React.createElement("h4", null,
                                _this.timestampToDateString(entry.timestamp),
                                ": ",
                                entry.name),
                            React.createElement("div", null,
                                React.createElement("pre", null, JSON.stringify(entry.info, undefined, 3)))));
                    })))));
    };
    return ServiceWorkerStatus;
}(React.Component));
exports.default = ServiceWorkerStatus;
//# sourceMappingURL=ServiceWorkerStatus.js.map