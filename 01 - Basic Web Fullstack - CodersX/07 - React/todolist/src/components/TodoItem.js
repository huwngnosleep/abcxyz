import React, {Component} from 'react';
import checkCompletedImg from '../img/checked.svg'
import checkImg from '../img/check-mark.svg'

class TodoItem extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div onClick={this.props.onClick} className="todo-item">
                <p className={this.props.className}>{this.props.name}</p>
                <img src={this.props.status ? checkCompletedImg : checkImg} />
            </div>
        ) 
        
    }
}

export default TodoItem