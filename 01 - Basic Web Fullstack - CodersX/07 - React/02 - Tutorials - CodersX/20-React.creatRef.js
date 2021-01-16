import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    // component có thể có một cái prop là "ref"
    // trong "ref" có thể gọi được những thằng "Ref" đã được khởi tạo trong constructor
    render() {
        return (
            <div ref={this.inputElement}></div>
        )
    }
}