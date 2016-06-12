import React from "react";
import Userid from "./Userid";
import Grid from "./Grid";

export default class Layout extends React.Component {
	render(){
		return (
			<div>
				<h1>It works!</h1>
				<Userid />
				<Grid />
			</div>
		);
	}
}