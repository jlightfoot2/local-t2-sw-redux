"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Snackbar_1 = require("material-ui/Snackbar");
/**
 * Alerts user to updates
 */
class UpdateSnackBar extends React.Component {
    constructor(props) {
        super(props);
        /*
          componentWillReceiveProps = (nextProps) => {
              if(nextProps.open && !this.state.open){
                this.setState({open: true})
              }
          }
          */
        this.handleActionTouchTap = () => {
            const { onClick } = this.props;
            onClick();
        };
        this.handleTouchTap = () => {
            this.setState({
                open: true,
            });
        };
        this.handleRequestClose = () => {
            this.setState({
                open: false,
            });
        };
        this.state = {
            open: false,
        };
    }
    render() {
        const { message, open, autoHideDuration } = this.props;
        return (React.createElement(Snackbar_1.default, { open: open, action: "update", message: message, autoHideDuration: autoHideDuration, onActionTouchTap: this.handleActionTouchTap, onRequestClose: this.handleRequestClose }));
    }
}
exports.default = UpdateSnackBar;
//# sourceMappingURL=UpdateSnackBar.js.map