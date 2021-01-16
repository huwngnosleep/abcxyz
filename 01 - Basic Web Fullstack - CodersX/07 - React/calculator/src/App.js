import React, { Component } from 'react';
import './App.css';

import {Container, Row, Col} from 'reactstrap'

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: '',
    }
  }
  inputChange() {
    this.setState({
      result: '',
    });
  }
  inputButtonClick(event) {
    this.setState({
      input: `${this.state.input + event.target.value}`,
      placeholder: `${this.state.input + event.target.value}`,
    });
  }
  delButtonClick() {
    let { input } = this.state;
    this.setState({
      input: input.substr(0, input.length - 1),
    });
  }
  getResult() {
    this.setState({
      input: '',
      result: eval(this.state.input)
    });
  }
  clearButtonClick() {
    this.setState({
      placeholder: '',
      input: '',
      result:''
    })
  }
  render() {
    return (
      <div className="App">
        <Container>
            <Row id="input-console">
                <input onChange={this.inputChange.bind(this)} value={this.state.input} placeholder={this.state.placeholder}/>
            </Row>
            <Row id="result-console">
                <input value={this.state.result}/>
            </Row>
          <div id="controllers">  
            <Row>
                <input className="button" onClick={this.clearButtonClick.bind(this)} type="button" value="Clr" />
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="/" />
            </Row>
            <Row>
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="7" />
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="8" />
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="9" />
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="*" />
            </Row>
            <Row>
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="4" />
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="5" />
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="6" />
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="-" />
            </Row>
            <Row>
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="1" />
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="2" />
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="3" />
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="+" />
            </Row>
            <Row>
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="0" />
                <input className="button" onClick={this.inputButtonClick.bind(this)} type="button" value="." />
                <input className="button" onClick={this.delButtonClick.bind(this)} type="button" value="Del" />
                <input className="button" onClick={this.getResult.bind(this)} type="button" value="=" />
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
