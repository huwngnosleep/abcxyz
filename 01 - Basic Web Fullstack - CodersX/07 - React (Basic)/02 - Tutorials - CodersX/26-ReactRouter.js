// npm install react-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// đầu tiền phải bao ngoài cái app bằng component router
render() {
        
    return(
        <Router>
            <div className='App'>
                <TodoList />    
                {/* bước 3: tạo thẻ Link (thay vì thẻ <a></a>) */}
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>

                {/* bước 2: khai báo route */}
                <Route path="/about" exact component={About} />   
                <Route path="/home" exact component={Home} />
            </div>
        </Router>
    )
}
