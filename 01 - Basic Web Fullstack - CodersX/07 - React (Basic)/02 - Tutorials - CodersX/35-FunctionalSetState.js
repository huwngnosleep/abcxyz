// bản chất cái setState trong React là Synchronous nên khi gọi setState
// các method sẽ được xếp vào trong một cái queue
// đợi khi tính toán DOM ảo xong hết rồi thì mới được gọi
// nên cái State ở cả 2 lần gọi cùng là 1
// nên State chỉ được tăng 1 chứ không phải 2
increase() {
    this.setState({value: this.state.value + 1});
    this.setState({value: this.state.value + 1});
}

// để biến cái setState thành đồng bộ thì dùng một cái function làm param như sau
increase() {
    this.setState(state => {value: state.value + 1});
    this.setState(state => {value: state.value + 1});
}
