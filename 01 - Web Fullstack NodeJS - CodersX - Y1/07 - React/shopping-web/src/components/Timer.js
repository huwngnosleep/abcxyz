import { React, Component } from "react";

export default class Timer extends Component {
    constructor() {
        super();
        this.state = {
            time: 0,
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time + 1,
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return( 
            <div>
                {this.props.render(this.state.time)}
            </div>
        )
    }
}