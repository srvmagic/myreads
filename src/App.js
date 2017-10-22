import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Bookshelf from './Bookshelf'
import {Link} from 'react-router-dom'

class App extends React.Component {

    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI
            .getAll()
            .then((books) => {
                this.setState({books});
            })

    }
    updatebook(book, shelf) {
        if (shelf === "none") {
            BooksAPI.update(book, shelf).then(() => {
              book.shelf = shelf;
              this.setState(prevState => ({
                 books: prevState.books.filter(b => b.id !== book.id),
              }))
            })
          } else {
            BooksAPI.update(book, shelf).then(() => {
              book.shelf = shelf;
              this.setState(prevState => ({
                 books: prevState.books.filter(b => b.id !== book.id).concat([ book ]),
              }))
            })
          }
            
    }
    render() {
        return (
            <div className='app'>
                <div className="list-books">

                    <Route
                        exact
                        path='/'
                        render={() => <div>
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div><Bookshelf books={this.state.books} updatebook={this.state.updatebook}/>
                        <Link to='/search' className='open-search'>Add Book</Link>
                    </div>}/>

                    <Route
                        exact
                        path='/search'
                        render={() => <ListBooks updatebook={this.state.updatebook}/>}/>
                </div>

            </div>

        );

    }
}

export default App;