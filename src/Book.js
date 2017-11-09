import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        updatebook: PropTypes.func.isRequired,
        defaultshelf: PropTypes.string.isRequired
        
    }

    render() {
        console.log(`${this.props.defaultshelf} for book ${this.props.book.title}`)
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
                            defaults={this.props.defaultshelf}
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
