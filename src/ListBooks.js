import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom';
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
  static propTypes = {
    updatebook: PropTypes.func.isRequired
    
  }
  state = {
    query: '',
    results: []
  }

  updateQuery = query => {
    this.setState({ query: query.trim() })
    let thisQuery = this.state.query
    if (thisQuery) {
      BooksAPI.search(thisQuery, 20).then(books => {
        this.setState({ results: !books.error ? books : []})
      })

    }
  }

  clearQuery = (query) => {
    this.setState({query: '',results:[]});
  }

  render() {

    const {query, results} = this.state


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
              name=''
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}/>

            <ol className='books-grid'>
              {results.map((book) => (<Book book={book} updatebook={this.props.updatebook}/>))}
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
