"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_saga_1 = require("redux-saga");
const effects_1 = require("redux-saga/effects");
const fetch = require("isomorphic-fetch");
var defaultConfig = {
    url: '',
    delay: 60000
};
// Our worker Saga: will perform the async increment task
function makeUpdateCheckCall(url) {
    return fetch(url)
        .then(function (response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
        .catch((e) => {
    });
}
function checkUpdates(cfg) {
    return function* () {
        while (true) {
            yield effects_1.call(redux_saga_1.delay, cfg.delay);
            if (cfg.url) {
                yield effects_1.call(makeUpdateCheckCall, cfg.url);
            }
        }
    };
}
exports.checkUpdates = checkUpdates;
// Our watcher Saga
function* sagaRoot(cfg = defaultConfig) {
    yield effects_1.fork(checkUpdates(cfg));
}
exports.default = sagaRoot;
//# sourceMappingURL=Sagas.js.map