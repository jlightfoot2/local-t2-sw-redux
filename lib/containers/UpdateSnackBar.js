"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateSnackBar_1 = require("../components/UpdateSnackBar");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
const stateToProps = (state, ownProps) => {
    return {
        open: state.app.updates.available && !state.app.updates.userNotified,
        message: state.app.updates.available ? 'There are updates available for this app.' : '',
        autoHideDuration: 2000
    };
};
const stateToDispatch = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(actions_1.updateUserNotified(true));
            dispatch(actions_1.updatesAvailable(false, 'user update click'));
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        }
    };
};
exports.default = react_redux_1.connect(stateToProps, stateToDispatch)(UpdateSnackBar_1.default);
//# sourceMappingURL=UpdateSnackBar.js.map