import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'
import Author from './Author'

class Book extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        book: PropTypes.object.isRequired,
        updatebook: PropTypes.func.isRequired
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
                            key={this.props.book.id}
                            shelf={this.props.book.shelf}
                            onChangeShelf={(value) => {
                            this
                                .props
                                .updatebook(this.props.book, value)
                        }}/>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this
                            .props
                            .book
                            .authors
                            .map((author) => (<Author author={author}/>))}</div>
                </div>
            </li>

        )
    }

}

export default Book
