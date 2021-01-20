import { Component } from "react";

class MyComponent extends Component {
    constructor() {
        super(props);

    }

    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        )
    }
}

const node = document.getElementById('challenge-node');
ReactDOM.render(<MyComponent/>, node)