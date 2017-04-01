"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../actions");
const logMax = 30;
let loadDate = new Date();
const firstLog = {
    name: 'log init',
    timestamp: loadDate.getTime() / 1000
};
const defaultApp = {
    cache: {
        isReady: false // ready for offlining
    },
    updates: {
        available: false,
        userNotified: false
    },
    log: [firstLog],
    version: '0.0.1'
};
exports.app = (state = defaultApp, action) => {
    switch (action.type) {
        case actions_1.UPDATES_USER_NOTIFIED:
            return Object.assign({}, state, { updates: Object.assign({}, state.updates, { userNotified: action.notified }) });
        case actions_1.CACHE_STATUS_CHANGE:
            return Object.assign({}, state, { cache: Object.assign({}, state.cache, { isReady: action.isReady }) });
        case actions_1.UPDATES_AVAILABLE:
            return Object.assign({}, state, { updates: Object.assign({}, state.updates, { available: action.available }) });
        case actions_1.SW_LOG_EVENT:
            const logLength = state.log.unshift(action.log);
            if (logLength > logMax) {
                state.log = state.log.slice(0, logMax);
            }
            return Object.assign({}, state, { log: state.log });
    }
    return state;
};
exports.default = exports.app;
//# sourceMappingURL=index.js.map