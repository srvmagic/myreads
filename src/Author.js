import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        author: PropTypes.string.isRequired
    }

    render() {
        return (

            <span className="book-authors">
                {this.props.author}
                &nbsp;
            </span>

        )
    }

}

export default Book
