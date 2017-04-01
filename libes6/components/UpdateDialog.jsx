"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Dialog_1 = require("material-ui/Dialog");
const FlatButton_1 = require("material-ui/FlatButton");
/**
 * Alerts user to updates
 */
class UpdateDialog extends React.Component {
    render() {
        var { open, onClick, message } = this.props;
        const actions = [
            <FlatButton_1.default label="Ok" primary={true} onTouchTap={onClick}/>
        ];
        return (<Dialog_1.default actions={actions} modal={true} open={open} onRequestClose={onClick}>
          {message}
        </Dialog_1.default>);
    }
}
exports.default = UpdateDialog;
//# sourceMappingURL=UpdateDialog.jsx.map