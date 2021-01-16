// ở đây cái Timer ở ngoài App.js có một cái props là render
// render là một function return ra thẻ div có giá trị là time
// thì file Timer.js xử lí logic và trả ra giá trị time


// Timer.js 
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

// App.js
<Timer render={time => <div>{time}</div>}></Timer>