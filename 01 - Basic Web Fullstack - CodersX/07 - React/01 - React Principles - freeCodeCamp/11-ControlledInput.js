// "handleChange" có thể nhận vào một param là "event"
// dùng "value" của cái input tag đấy bằng "event.target.value"
handleChange(event) {
    this.setState({input: event.target.value});
}
<input onChange={this.handleChange} value={this.state.input}/>
// *** lưu ý cái "this.handleChange"