import './TrafficLight.css' 
import React from 'react'

class TrafficLight extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        this.setState({
            active: !this.state.active
        });
    }
    render() {
        return(
            <div onClick={this.clickHandler} className={`${this.props.className} ${this.state.active ? 'active' : ''}`}></div>
        )
    }
}   

export default TrafficLight;