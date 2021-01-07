class App extends Component {
    // phải thêm constructor
    constructor() {
        super();
        this.todoItems = [
            "Hair cut",
            "Play soccer",
        ]
    }
    render() {
      return (
        <div className="App">
        {/* dùng ngoặc nhọn để viết javascript */}
            {                              // nên thêm cái prop là key, làm gì thì chưa biết
                this.todoItems.map((item, index) => <TodoItem key={index} value={item} />)
            }
        </div>
      );
    }
}

export default App;