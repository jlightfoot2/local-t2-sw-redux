import {
  LogEntryInterface,
} from '../reducers';

export const UPDATES_AVAILABLE = 'T2.UPDATES_AVAILABLE';
export const UPDATES_USER_NOTIFIED = 'T2.UPDATES_USER_NOTIFIED';

export const CACHE_STATUS_CHANGE = 'T2.T2CACHE_STATUS_CHANGE';
export const SW_LOG_EVENT = 'T2.SW_LOG_EVENT';

export const UPDATES_CHECK_REQUEST_START = 'T2.UPDATES_CHECK_REQUEST_START';
export const UPDATES_CHECK_REQUEST_END = 'T2.UPDATES_CHECK_REQUEST_END';

import * as fetch from 'isomorphic-fetch';

// Our worker Saga: will perform the async increment task
export const makeUpdateCheckCall = (url) => {
  return fetch(url)
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        });
}

export const updatesCheckStart = () => {
  return {
    type: UPDATES_CHECK_REQUEST_START
  };
};

export const updatesCheckEnd = () => {
  return {
    type: UPDATES_CHECK_REQUEST_END
  };
};

export const checkForUpdates = (url: string) => {
  var onlineId = 1;

  return function (dispatch, getState) {
    dispatch(updatesCheckStart());
    let makeRequest = true;
    if ('onLine' in navigator) {
      if (onlineId && !navigator.onLine) { //we are not online so no point in checking for updates
        onlineId = 0;
        makeRequest = false;
        
      }
    }
    if (makeRequest) {
      try{
        makeUpdateCheckCall(url).then((versionInfo) => {
          console.log(versionInfo);
        });
      } catch(e) {
        swLogEvent('update check file not available',e);
      }
      dispatch(updatesCheckEnd());
    }
  };
};

export const cacheStatusChange = (isReady) => {
  return {
    type: CACHE_STATUS_CHANGE,
    isReady
  };
};

export const updatesAvailable = (available, meta = '') => {
  return {
    type: UPDATES_AVAILABLE,
    available,
    meta
  };
};

export const updateUserNotified = (notified) => {
  return {
    type: UPDATES_USER_NOTIFIED,
    notified
  };
};

export const swLogEvent = (name,info=undefined) => {
  let curTime = new Date();

  const log: LogEntryInterface = {
    name,
    timestamp: curTime.getTime()/1000, //time in seconds epoch
    info
  }
  
  return {
    type: SW_LOG_EVENT,
    log
  };
};

export default {
  cacheStatusChange,
  updatesAvailable,
  updateUserNotified,
  swLogEvent
};
