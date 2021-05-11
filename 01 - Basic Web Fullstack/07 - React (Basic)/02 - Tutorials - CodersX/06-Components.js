// tạo folder components
// tạo file TodoItem.js với form sau
// lưu ý: wrapper của component luôn có classname trùng tên component

import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div className="TodoItem">Go shopping</div>
        )
    }
}

export default TodoItem

// import vào app.js:

import TodoItem from './components/TodoItem'

// sau đó cứ sử dụng component trong app thôi
