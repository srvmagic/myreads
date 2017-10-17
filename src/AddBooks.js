import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import  {Link} from 'react-router-dom';

class AddBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        });
    }

    clearQuery = (query) => {
        this.setState({query: ''});
    }

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

export default AddBooks
