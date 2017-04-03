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
function newDateTs(){
    const intervalDate = new Date();
    return intervalDate.getTime();
}
var lastTs = newDateTs();
const appMiddleware = (config: MiddlewareConfigInterface)  => {

  return store => next => {
    return action => {
      let result = next(action);
      if((lastTs + config.interval) < newDateTs()){
        lastTs = newDateTs();
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
