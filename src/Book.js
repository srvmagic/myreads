import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired
    }

    addBook(book) {
        BooksAPI.update(book, book.shelf)
    }

    render() {
        const bk = this.props.book
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
                            key={this.props.book.id}
                            shelf={this.props.book.shelf}
                            onAddBook={(bk) => {
                                console.log("HEREEE"+bk.shelf)
                            this.addBook(bk)
                        }}/>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </li>

        )
    }

}

export default Book
