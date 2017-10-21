import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Books extends Component {
    static propTypes = {
        selectedbooks: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {

        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this
                                    .props
                                    .selectedbooks
                                    .map((book) => (<Book key={book.id} book={book}/>))}
                            </ol>
                        </div>
                    </div>
                </div>
                <div></div>

            </div>

        )
    }

}

export default Books
