import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
	constructor(props){
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	componentDidMount() {
		setInterval(() => this.renderTimeUntil(), 1000);
	}

	componentWillMount() {
		this.renderTimeUntil()
	}

	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date()),
			seconds = Math.floor((time/1000)%60),
			minutes = Math.floor((time/1000/60)%60),
			hours = Math.floor(time/(1000*60*60)%24),
			days = Math.floor(time/(1000*60*60*24));

		const timeUntil = {
			days,
			hours,
			minutes,
			seconds
		}

		return(timeUntil)
	}

	leadingZero(num) {
		return num < 10 ? '0' + num : num;
	}

	renderTimeUntil() {
		let me = this,
			deadline = me.props.deadline,
			time = me.getTimeUntil(deadline);
	
		me.setState({days: time.days, hours: time.hours, minutes: time.minutes, seconds: time.seconds});
	}

	render() {
		let me = this,
			days = me.leadingZero(me.state.days),
			hours = me.leadingZero(me.state.hours),
			minutes = me.leadingZero(me.state.minutes),
			seconds = me.leadingZero(me.state.seconds);

		return(
			<div>
				<div className="Clock-days">{days} days</div>
				<div className="Clock-hours">{hours} hours</div>
				<div className="Clock-minutes">{minutes} minutes</div>
				<div className="Clock-seconds">{seconds} seconds</div>
			</div>
		)
	}
}

export default Clock;