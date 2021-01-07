this.toggleVisibility = this.toggleVisibility.bind(this);

toggleVisibility() {
    // dùng lệnh if như này để khi chữ đang hiện ấn vào button nó sẽ mất
    // và khi chữ bị mất ấn vào button sẽ hiện lại
    if(this.state.visibility == false) {
        this.setState({visibility: true})
    } else {
        this.setState({visibility: false})
    }

    // setState có thể nhận vào 2 tham số
    // setState((state, props) => ({object})) 
    // *** cái ngoặc đơn ở arrow function rất quan trọng
    this.setState(state => {visibility: state.visibility
    });
}
