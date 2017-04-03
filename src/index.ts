//require('babel-polyfill');
import appReducer from './reducers';
import appActions from './actions';
import UpdateDialog from './containers/UpdateDialog'
import UpdateSnackBar from './containers/UpdateSnackBar';
import AppStatus from './containers/AppStatus';

import {registerPromise} from './lib/serviceWorker';
import {handleUpdateCheck} from './lib/helpers';
interface MiddlewareConfigInterface {
  url: string;
  interval: number;
}
const intervalDate = new Date();
let lastTs = intervalDate.getTime();
const appMiddleware = (config: MiddlewareConfigInterface)  => {

  return store => next => {
    return action => {
      let result = next(action);
      if((lastTs + config.interval) < intervalDate.getTime()){
        lastTs = intervalDate.getTime();
        handleUpdateCheck(store,config);
      }
      return result;
    };
  }
};

export {
  appReducer,
  appActions,
  appMiddleware,
  registerPromise,
  UpdateSnackBar
};

export default registerPromise;
