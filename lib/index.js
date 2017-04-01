"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//require('babel-polyfill');
const reducers_1 = require("./reducers");
exports.appReducer = reducers_1.default;
const actions_1 = require("./actions");
exports.appActions = actions_1.default;
const UpdateSnackBar_1 = require("./containers/UpdateSnackBar");
exports.UpdateSnackBar = UpdateSnackBar_1.default;
const serviceWorker_1 = require("./lib/serviceWorker");
exports.registerPromise = serviceWorker_1.registerPromise;
const appMiddleware = store => next => {
    return action => {
        let result = next(action);
        //does nothing for now
        return result;
    };
};
exports.appMiddleware = appMiddleware;
exports.default = serviceWorker_1.registerPromise;
//# sourceMappingURL=index.js.map