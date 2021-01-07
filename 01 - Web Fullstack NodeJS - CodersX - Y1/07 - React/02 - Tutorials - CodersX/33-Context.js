// lưu ý đặt provider ra ngoài Router để tất cả các trang đều dùng được context

// tạo một cái context như này ở folder contexts
const NumberContext = React.createContext();

// rồi import nó vào ở file Provider
import NumberContext from '../contexts/NumberContext'

export default class extends Component {
    render() {
        return(
            // provider có một cái props là value
            // value có thể nhận 1 giá trị, hoặc nhận object
            <NumberContext.Provider value={5}>
                {this.props.children}
            </NumberContext.Provider>
        )
    }
}

// import cả hai cái ở app.js
// rồi khi nào dùng thì gọi ra thôi
// mặc định cái consumer luôn là một stateless function
// nó nhận vào input là context, và return ra cái element nào đấy
// lấy giá trị bằng context.abcxyz
<NumberProvider>
    <div className="App">
        <HoveredTopMenu></HoveredTopMenu>
        <List data={data} render={(item) => <div>{item}</div>}/>
        <Timer render={time => <div>{time}</div>}></Timer>
        <NumberContext.Consumer>
            {context => <h2>{context}</h2>}
        </NumberContext.Consumer>
    </div>
</NumberProvider>