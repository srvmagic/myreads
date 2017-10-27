import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        updatebook: PropTypes.func.isRequired,
        getbookshelf: PropTypes.func.isRequired,
    }

    render() {
        return (

            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
                        }}></div>
                        <Shelf
                            book={this.props.book}
                            default={this.props.getbookshelf(this.props.book.id)}
                            onChangeShelf={(value) => {
                            this
                                .props
                                .updatebook(this.props.book, value)
                        }}/>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors
}</div>
                </div>
            </li>

        )
    }

}

export default Book
