import React from "react";

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toTimeString().substring(0,8)
        };

        this.intervalRef = null;
    }

    componentDidMount() {
        console.log("component loaded");
        this.updateTimer();
    }

    componentDidUpdate() {
        // console.log("component updated");
    }

    componentWillUnmount() {
        // clear interval
        console.log("destroying component");
        clearInterval(this.intervalRef);
    }

    updateTimer() {
        this.intervalRef = setInterval(()=>{
            this.setState({time: new Date().toTimeString().substring(0,8)});
        }, 1000)
    }

    render () {
        return (
            <div>Time: {this.state.time}</div>
        );
    }
}

export default Timer;