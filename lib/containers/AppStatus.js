"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceWorkerStatus_1 = require("../components/ServiceWorkerStatus");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
const stateToProps = (state, ownProps) => {
    return {
        updates: state.app.updates,
        cache: state.app.cache,
        log: state.app.log,
        actions: [
            { actions: [actions_1.swLogEvent('random event')], name: 'random event' },
            { actions: [actions_1.updatesAvailable(true), actions_1.updateUserNotified(false)], name: 'Fake new SW' },
        ]
    };
};
const dispatchToProps = (dispatch) => {
    return {
        dispatchAction: (actions) => {
            return () => {
                actions.map(action => dispatch(action));
            };
        }
    };
};
exports.default = react_redux_1.connect(stateToProps, dispatchToProps)(ServiceWorkerStatus_1.default);
//# sourceMappingURL=AppStatus.js.map