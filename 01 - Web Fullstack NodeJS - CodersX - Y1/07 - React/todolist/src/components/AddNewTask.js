import React, {Component} from 'react';

class AddNewTask extends Component {
    
    render() {
        
        return (
            <form onSubmit={this.props.onSubmit}>
                <input id="add-input" onChange={this.props.onChange} type="text"/>
                <button type='submit'>Add</button>
            </form>
        )

        
    }
}

export default AddNewTask;