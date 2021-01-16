// nguyên tắc: component chỉ render lại khi "state" hoặc "props" thay đổi
// muốn các component có state khác nhau, thì phải đặt props cho nó ở bên app

// app.js
<div>
    <TrafficLight className="light red"/>
    <TrafficLight className="light yellow"/>
    <TrafficLight className="light green"/>
</div>

// "props" là dạng readOnly nên phải dùng template string để làm nó dynamic
<div onClick={this.clickHandler} className={`${this.props.className} ${this.state.active ? 'active' : ''}`}></div>