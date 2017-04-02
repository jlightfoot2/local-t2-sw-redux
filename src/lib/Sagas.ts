import { delay } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';
import {checkForUpdates,updatesCheckEnd} from '../actions';
import * as fetch from 'isomorphic-fetch';
var defaultConfig = {
  url: '',
  delay: 60000
}
// Our worker Saga: will perform the async increment task
function makeUpdateCheckCall(url) {
  return fetch(url)
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .catch((e) => {

        });
}

export function checkUpdates (cfg) {
  return function* () {
    while (true) {
      yield call(delay, cfg.delay);
      if(cfg.url){
        yield call(makeUpdateCheckCall,cfg.url);
      }
    }
  }
}

// Our watcher Saga
export default function* sagaRoot (cfg = defaultConfig) {

  yield fork(checkUpdates(cfg));
}