import React, { Component } from "react";
import "./App.css";
import Solution from "./components/Solution";
import Score from "./components/Score";
import Letters from "./components/Letters";

class App extends Component {
	constructor() {
		super()
		this.state = {
			solution: [
				{ word: "zebra", hint: "animal in africa" },
				{ word: "phone", hint: "we use it every day" },
			],
      letterStatus: this.generateLetterStatuses(),
      score: 100
		};
	}

	generateLetterStatuses() {
		let letterStatus = {};
		for (let i = 65; i < 91; i++) {
			letterStatus[String.fromCharCode(i)] = false;
		}
		return letterStatus;
	}

	render() {
		return (
			<div className='App'>
				<Score score={this.state.score} />
        <Solution solution={this.state.solution}/>
				<Letters allTheLetters={this.state.letterStatus} />
			</div>
		);
	}
}

export default App;
