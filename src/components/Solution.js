import React, { Component } from "react";
import Letter from "./Letter";

class Solution extends Component {
	render() {
		return (
			<div>
				{/* should be var by the num of leters in the sulotion */}
				<div>_ _ _ _ _</div> 
				<div>this is the hint</div>
				{/* <Letter /> for now this is not relevant */}
			</div>
		);
	}
}


export default Solution;
