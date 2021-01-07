import { Component } from "react";

// khi render ra một cái nào đấy
<todoItem> Do something </todoItem>
//         ^----- cái này gọi là props.children

// nên ở class todoItem có thể gọi lại nó như sau
class todoItems extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}