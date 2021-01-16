import React, {Component} from 'react';

import NumberContext from '../contexts/NumberContext'

export default class extends Component {
    render() {
        return(
            <NumberContext.Provider value={5}>
                {this.props.children}
            </NumberContext.Provider>
        )
    }
}