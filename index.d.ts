
import * as Redux from 'redux';

declare namespace T2AppReduxActions {

  interface actionObject {
    type: string;
  }

  function updatesCheckStart(): actionObject;
  function updatesCheckEnd(): actionObject;
  function checkForUpdates(): actionObject;

  function cacheStatusChange(): actionObject;
  function updatesAvailable(): actionObject;
  function updateUserNotified(): actionObject;
  function swLogEvent(): actionObject; 
}

declare namespace T2AppReduxReducers {

  function app(state?: any, options?: any): Redux.Reducer<any>;
}

declare namespace T2AppReduxComponents {
   const ServiceWorkerStatus: any;
   const UpdateDialog: any;
   const UpdateSnackBar: any;
}

declare namespace T2AppReduxContainers {
   const AppStatus: any;
   const UpdateDialog: any;
   const UpdateSnackBar: any;
}

declare namespace T2AppReduxMiddleware {
   function checkOnlineStatus(defaultMs: number): Object;
  // function sagaRoot(): Object;
}

declare namespace T2AppReduxRegisterPromise {
  function registerPromise(registrationPromise: any, appStore: any): any
}


declare module 'local-t2-sw-redux' {

  export import appReducers = T2AppReduxReducers.app;
  export import appActions = T2AppReduxActions;
  export import appMiddleware = T2AppReduxMiddleware;
  export import checkOnlineStatus = T2AppReduxMiddleware.checkOnlineStatus;
  export import registerPromise = T2AppReduxRegisterPromise.registerPromise;

}

declare module 'local-t2-sw-redux/components/ServiceWorkerStatus' {
  export import ServiceWorkerStatus = T2AppReduxComponents.ServiceWorkerStatus;
  export default ServiceWorkerStatus;
}
declare module 'local-t2-sw-redux/components/UpdateDialog' {
  export import UpdateDialog = T2AppReduxComponents.UpdateDialog;
  export default UpdateDialog;
}
declare module 'local-t2-sw-redux/components/UpdateSnackBar' {
  export import UpdateSnackBar = T2AppReduxComponents.UpdateDialog;
  export default UpdateSnackBar;
}

declare module 'local-t2-sw-redux/containers/AppStatus' {
  export import AppStatus = T2AppReduxContainers.AppStatus;
  export default AppStatus;
}

declare module 'local-t2-sw-redux/containers/UpdateDialog' {
  export import UpdateDialog = T2AppReduxContainers.UpdateDialog;
  export default UpdateDialog;
}

declare module 'local-t2-sw-redux/containers/UpdateSnackBar' {
  export import UpdateSnackBar = T2AppReduxContainers.UpdateSnackBar;
  export default UpdateSnackBar;
}