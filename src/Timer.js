import React, { Component } from 'react'
import Time from './Time'
import "./Time.css"

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0,
            interval:0
        }
    }
    start = () => {
        if (this.state.interval) {
            return
        }
        setInterval(this.state.interval)
        const interval = setInterval(
            () => {
                this.setState({
                    
                    timeMs: this.state.timeMs + 1000
                })

            }, 1000);
        this.setState({
            interval
        })
    }
    reset = () => {
        clearInterval(this.state.interval)
        // this.state.timeMs =0   
        this.setState({
            timeMs: 0
        })     
        
        this.setState({
            interval: 0
        })
    }
    pause = () => {
        if (!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            interval: 0
    })}
    render() {
        const {timeMs,interval}= this.state
        return <div className="time-container">
            <Time ms={timeMs} />
            <input className='button' type="button" value={!interval ? "Start" : "Pause"} 
                onClick={!interval ? this.start : this.pause} />
            <input className='button' type="button" value="Reset"
                onClick={this.reset} />
        </div>
    }
}

export default Timer