import React from "react";
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Userid extends React.Component {
	constructor(props){
    super(props);
    this.state = {
      textFieldValue: "",
    };
  }

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) }
	}

    _handleTextFieldChange = function(e) {
    		this.setState({
    		textFieldValue: e.target.value
    	});
    }

	render(){
		return (
			<form>
				<TextField hintText="Min. 8 characters" value={this.state.textFieldValue} onChange={this._handleTextFieldChange.bind(this)}/>
			</form>
		);
	}
}

Userid.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
}