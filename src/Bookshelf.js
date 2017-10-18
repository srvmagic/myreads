import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import Books from './Books'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    let bookshelftypes = [
      {
        type: 'currentlyReading',
        title: 'Currently Reading'
      }, {
        type: 'wantToRead',
        title: 'Want To Read'
      }, {
        type: 'read',
        title: 'Read'
      }
    ]
    return (bookshelftypes.map((bookshelftype) => {

      const filterbooks = this
        .props
        .books
        .filter((currentbook) => currentbook.shelf === bookshelftype.type)

      return (
        <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <Books selectedbooks={filterbooks} title={bookshelftype.title}/>
            <Link to='/search' className='open-search'>Add Book</Link>
          </div>
        </div>

      )
    }))
  }
}
export default Bookshelf
