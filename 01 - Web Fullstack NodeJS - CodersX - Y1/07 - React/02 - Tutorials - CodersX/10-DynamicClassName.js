// viết css cho class nào đấy
// link nó vào file component.js
import './TodoItem.css'

// dùng logic để thêm class
let {item} = this.props;
let className = "TodoItems";
if(item.isCompleted === true) {
    className += " TodoItems-completed"
}

