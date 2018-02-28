import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		let me = this;
		me.state = {
			deadline: 'December 25, 2018',
			newDeadLine: ''
		}
	}

	changeDeadline() {
		this.setState({deadline : this.state.newDeadLine})
	}

	setNewDeadline(userInput) {
		this.setState({newDeadLine: userInput})
	}

	render() {
		return(
			<div className="App">
				<div className="App-title">Countdown to {this.state.deadline}</div>
				<Clock 
					deadline={this.state.deadline}
				/>
				<Form inline>
					<FormControl 
						onChange={event => this.setNewDeadline(event.target.value)}
						placeholder='new date' 
					/>
					<Button onClick={() => this.changeDeadline()}>
						Submit
					</Button>
				</Form>
			</div>
		)
	}
}

export default App;