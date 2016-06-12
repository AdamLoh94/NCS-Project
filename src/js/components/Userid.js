import React from "react";
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Userid extends React.Component {
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) }
            }
	render(){
		return (
			<form>
				<TextField hintText="Min. 8 characters" />
			</form>
		);
	}
}

Userid.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
}