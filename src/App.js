import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {books: []}
    this.updatebook = this.updatebook.bind(this)
    this.findbook = this.findbook.bind(this)
  }

  componentDidMount () {
    BooksAPI
      .getAll()
      .then((books) => {
        this.setState({books})
      })
  }
  updatebook (book, shelf) {
    if (shelf === 'none') {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf
        this.setState(bookState => ({
          books: bookState.books.filter(bk => bk.id !== book.id)
        }))
      })
    } else {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf
        this.setState(bookState => ({
          books: bookState.books.filter(bk => bk.id !== book.id).concat([ book ])
        }))
      })
    }
  }

  findbook (id) {
    let foundbook =  this.state.books.find(b => b.id === id)
    return foundbook ? foundbook.shelf : "none"
  }  

  render () {
    return (
      <div className='app'>
        <div className='list-books'>
          <Route exact path='/' render={() => <div>
                                                 <div className='list-books-title'>
                                                   <h1>MyReads</h1>
                                                 </div>
                                                 <Bookshelf findbook={this.findbook} books={this.state.books} updatebook={this.updatebook}  />
                                                 <Link to='/search' className='open-search'> Add Book
                                                 </Link>
                                               </div>} />
          <Route exact path='/search' render={() => <ListBooks findbook={this.findbook} updatebook={this.updatebook}  />} />
        </div>
      </div>

    )
  }
}

export default App
