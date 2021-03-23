// với các method mặc định như constructor, life cycle method thì mặc định
// khi gọi hàm super() là đã thực hiện thao tác bind(this) cho nó rồi

// bình thường khi viết method cho một cái class component của react
// sẽ phải bind này nọ như thế này

class App extends Component {
    constructor() {
        super()
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        this.setState({abc: xyz})
    }
    render() {
        return(
            <input onChange={this.handleChange}/>
        )
    }
}

// để cho đỡ phải bind nhiều thì có thể dùng arrow function như sau
// vì bản chất arrow function là tự lấy context là cái nơi mà nó được declare

handleChange = () => {
    this.setState({abc: xyz})
}