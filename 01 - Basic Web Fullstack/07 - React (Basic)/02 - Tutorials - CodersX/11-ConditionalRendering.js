render() {
    // cach 1
    if(this.todoItems.length > 0) {
        return (
            <div className="App">
                {
                    this.todoItems.map((item, index) => <TodoItem key={index} item={item} />)
                }
            </div>
        );
    } else {
        return <div className="App">Nothing here</div>
    }
    // cach 2
    return( 
        <div className="app">
            {this.todoItems.length > 0 && this.todoItems.map((item, index) => <TodoItem key={index} item={item} />)}
            {this.todoItems.length = 0 && 'Nothing here'}
        </div>
    )
}