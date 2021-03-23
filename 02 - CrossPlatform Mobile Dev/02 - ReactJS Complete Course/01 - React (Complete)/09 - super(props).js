// bản chất của việc super(props) là để cho có thể gọi this.props trong constructor
class App extends Component {
    constructor(props) {
        super(props)
        // this.props
    }
}