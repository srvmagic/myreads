import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import {Link} from 'react-router-dom';
import Book from './Book'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
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



    const {query} = this.state
    let showingBooks = []
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = this.props.books.filter((book) => match.test(book.title))
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
            <input
              type="text"
              placeholder="Search by title or author"
              type='text'
              name=''
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}/>


                <ol className='books-grid'>
                    {showingBooks.map((book) => (
                      <Book book={book}/>
                    ))}
                </ol>






          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>

    )
  }

}

export default ListBooks
