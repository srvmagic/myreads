import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {

    const currentbooks = this
      .props
      .books
      .filter((currentbook) => currentbook.shelf === 'currentlyReading')
    const wantbooks = this
      .props
      .books
      .filter((wantbook) => wantbook.shelf === 'wantToRead')

    const readbooks = this
      .props
      .books
      .filter((readbook) => readbook.shelf === 'read')
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {currentbooks.map((book) => (
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${book.imageLinks.thumbnail})`
                            }}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={book.shelf}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {wantbooks.map((book) => (
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${book.imageLinks.thumbnail})`
                            }}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={book.shelf}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {readbooks.map((book) => (
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${book.imageLinks.thumbnail})`
                            }}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={book.shelf}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

          </div>
          <div className="open-searchs">
            <Link to='/search' className='open-searchs'>Add a book</Link>
          </div>
        </div>
      </div>

    )
  }

}

export default Bookshelf
