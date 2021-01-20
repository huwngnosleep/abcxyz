// trong một cái form khi ấn submit là mặc định sẽ trigger cái "handleSubmit" function

handleSubmit(event) {
    // event.preventDefault() để ngăn không submit cái form khi chưa có input
    event.preventDefault();
    this.setState({submit: this.state.input});
}