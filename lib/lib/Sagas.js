"use strict";

var _marked = [makeUpdateCheckCall, checkUpdates, sagaRoot].map(regeneratorRuntime.mark);

Object.defineProperty(exports, "__esModule", { value: true });
var redux_saga_1 = require("redux-saga");
var effects_1 = require("redux-saga/effects");
// Our worker Saga: will perform the async increment task
function makeUpdateCheckCall() {
    return regeneratorRuntime.wrap(function makeUpdateCheckCall$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}
function checkUpdates(defaultDelay = 20000) {
    return regeneratorRuntime.wrap(function checkUpdates$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    if (!true) {
                        _context2.next = 5;
                        break;
                    }

                    _context2.next = 3;
                    return effects_1.call(redux_saga_1.delay, defaultDelay);

                case 3:
                    _context2.next = 0;
                    break;

                case 5:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}
exports.checkUpdates = checkUpdates;
// Our watcher Saga
function sagaRoot() {
    return regeneratorRuntime.wrap(function sagaRoot$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.next = 2;
                    return effects_1.fork(checkUpdates);

                case 2:
                case "end":
                    return _context3.stop();
            }
        }
    }, _marked[2], this);
}
exports.default = sagaRoot;
//# sourceMappingURL=Sagas.js.map