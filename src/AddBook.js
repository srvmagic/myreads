import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import  {Link} from 'react-router-dom';

class AddBook extends Component {
    render() {
        const {books} = this.props
        const {query} = this.state
        let showingBooks
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = books.filter((book) => match.test(book.name)) // TODO or book author
        } else {
            showingBooks = books
        }
        showingContacts.sort(sortBy('name'))
		return (
        )
}

}

export default AddBook
