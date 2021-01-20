import PropTypes from 'prop-types'
import { Component } from 'react'

class TodoItem extends Component {
    // ...
}

TodoItem.PropTypes = {
    item: PropTypes.string.isRequired,
    onClick: PropTypes.func
}