import './App.css';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import TodoList from "./components/TodoList"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

class App extends Component {
    constructor() {
        super();
        
    }
    render() {
        
        return(
            <Router>
                <div className='App'>
                    <TodoList />    
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>

                    <Route path="/about" exact component={About} />   
                    <Route path="/home" exact component={Home} />
                </div>
            </Router>
        )
    }
}

export default App;
