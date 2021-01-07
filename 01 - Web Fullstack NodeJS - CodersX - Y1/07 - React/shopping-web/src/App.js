import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import TopMenu from './components/TopMenu';
import Products from './pages/Products';
import WithHoverOpacity from './components/WithHoverOpacity';
import List from "./components/List";
import Timer from './components/Timer';

// context
import NumberProvider from './components/NumberProvider'
import NumberContext from './contexts/NumberContext'
import {CartProvider} from './contexts/Cart'

const HoveredTopMenu = WithHoverOpacity(TopMenu, 0.7);

const data = ['A', 'B', 'C'];

function App() {
  return (
    
    <CartProvider>
      <Router>
        <div className="App">
          <HoveredTopMenu></HoveredTopMenu>
          <List data={data} render={(item) => <div>{item}</div>}/>
          <Timer render={time => <div>{time}</div>}></Timer>
        </div>

      {/* router */}
      <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/products">
            <Products />
          </Route>
          
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
