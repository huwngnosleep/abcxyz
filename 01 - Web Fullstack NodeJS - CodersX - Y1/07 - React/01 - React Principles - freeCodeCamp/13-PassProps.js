// có thể pass các state, method từ parent vào các child qua props
<GetInput input={this.state.inputValue} handleChange={this.handleChange}/>

// rồi sử dụng trong child component như sau
class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };