import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Books extends Component {

    static propTypes = {
        selectedbooks: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        updatebook: PropTypes.func.isRequired,
        getbookshelf: PropTypes.func.isRequired
        
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
                                    .map((book) => 
                                    (<Book book={book} updatebook={this.props.updatebook} getbookshelf={this.props.getbookshelf}/>))}
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
