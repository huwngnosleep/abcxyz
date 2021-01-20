có thể fetch data trong componentDidMount

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json) // convert sang json cho js có thể hiểu
        .then(users => this.setState({monsters: users}))
}