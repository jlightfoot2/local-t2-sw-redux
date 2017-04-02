"use strict";

var _marked = [sagaRoot].map(regeneratorRuntime.mark);

Object.defineProperty(exports, "__esModule", { value: true });
var redux_saga_1 = require("redux-saga");
var effects_1 = require("redux-saga/effects");
var fetch = require("isomorphic-fetch");
var defaultConfig = {
    url: '',
    delay: 60000
};
// Our worker Saga: will perform the async increment task
function makeUpdateCheckCall(url) {
    return fetch(url).then(function (response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).catch(function (e) {});
}
function checkUpdates(cfg) {
    return regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!true) {
                            _context.next = 8;
                            break;
                        }

                        _context.next = 3;
                        return effects_1.call(redux_saga_1.delay, cfg.delay);

                    case 3:
                        if (!cfg.url) {
                            _context.next = 6;
                            break;
                        }

                        _context.next = 6;
                        return effects_1.call(makeUpdateCheckCall, cfg.url);

                    case 6:
                        _context.next = 0;
                        break;

                    case 8:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    });
}
exports.checkUpdates = checkUpdates;
// Our watcher Saga
function sagaRoot(cfg = defaultConfig) {
    return regeneratorRuntime.wrap(function sagaRoot$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return effects_1.fork(checkUpdates(cfg));

                case 2:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked[0], this);
}
exports.default = sagaRoot;
//# sourceMappingURL=Sagas.js.map