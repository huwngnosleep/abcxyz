import React, {Component} from 'react';
import TodoItem from './TodoItem'
import AddNewTask from './AddNewTask'
import './TodoItem.css'


class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todoItems: [
                {name: 'Wake up', isCompleted: true},
                {name: 'Have breakfast', isCompleted: true},
                {name: 'Go to school', isCompleted: false}
            ]
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        event.preventDefault();
        let todoItems = this.state.todoItems;
        todoItems.push({name: this.state.input, isCompleted: false})
        this.setState({todoItems});
        let input = document.getElementById('add-input');
        input.value = '';
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    handleClick(item, index) {
        return () => {
            const isCompleted = item.isCompleted;
            const todoItems = this.state.todoItems;
            todoItems[index].isCompleted = !isCompleted; 
            this.setState({
                todoItems: todoItems
            })
        }
    }
    
    render() {
        return(
            <div>
                <h1>Todo List</h1>
                <AddNewTask onSubmit={this.handleSubmit} onChange={this.handleChange}/>
                {
                    this.state.todoItems.map((item, index) => 
                        <TodoItem 
                            onClick={this.handleClick(item, index)} 
                            className={item.isCompleted ? 'completed' : ''}
                            key={index}
                            name={item.name}
                            status={item.isCompleted}
                        />
                    )
                }
            </div>
        )
    }
}

export default TodoList