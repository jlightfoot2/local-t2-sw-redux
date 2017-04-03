"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { delay } from 'redux-saga';
//import { put, call, fork, select} from 'redux-saga/effects';
var actions_1 = require("../actions");
exports.handleUpdateCheck = function (store, config) {
    store.dispatch(actions_1.checkForUpdates(config));
};
//# sourceMappingURL=helpers.js.map