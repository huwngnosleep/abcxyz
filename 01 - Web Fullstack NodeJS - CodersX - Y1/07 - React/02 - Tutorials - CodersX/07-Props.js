// có thể truyền property vào một component
<TodoItem value="Hair cut"></TodoItem>;
<TodoItem value="Play soccer"></TodoItem> 

// sau đó các prop truyền vào sẽ có trong một object gọi là "props"
// có thể tham chiếu đến như sau:
class TodoItem extends Component {
    render() {
        return (
            <div className="TodoItem">{this.props.value}</div>
        )
    }
}

// nếu prop truyền vào là một biến thì phải dùng ngoặc nhọn
<TodoItem value="Hair cut" option={{1: "store", 2: "at home"}}></TodoItem> 
