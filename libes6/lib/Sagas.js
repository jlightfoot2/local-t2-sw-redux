"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_saga_1 = require("redux-saga");
const effects_1 = require("redux-saga/effects");
// Our worker Saga: will perform the async increment task
function* makeUpdateCheckCall() {
}
function* checkUpdates(defaultDelay = 20000) {
    while (true) {
        yield effects_1.call(redux_saga_1.delay, defaultDelay);
        //yield put(checkForUpdates());
    }
}
exports.checkUpdates = checkUpdates;
// Our watcher Saga
function* sagaRoot() {
    yield effects_1.fork(checkUpdates);
}
exports.default = sagaRoot;
//# sourceMappingURL=Sagas.js.map