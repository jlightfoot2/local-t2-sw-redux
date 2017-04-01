"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateDialog_1 = require("../components/UpdateDialog");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
const stateToProps = (state, ownProps) => {
    return {
        open: state.app.updates.available && !state.app.updates.userNotified,
        message: 'There are updates available for this app. This page will reload.'
    };
};
const stateToDispatch = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(actions_1.updateUserNotified(true));
            dispatch(actions_1.updatesAvailable(false, 'user dialog click'));
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        }
    };
};
exports.default = react_redux_1.connect(stateToProps, stateToDispatch)(UpdateDialog_1.default);
//# sourceMappingURL=UpdateDialog.js.map