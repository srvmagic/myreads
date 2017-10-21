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

      
 

    render() {
        let uuid = require('uuid4')
        var id = uuid()
        return (
            <div className='app'>
                <div className="list-books">

                    <Route
                        exact
                        path='/'
                        render={() => <div>
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div><Bookshelf key={id} books={this.state.books}/>
                        <Link to='/search' className='open-search'>Add Book</Link>
                    </div>}/>

                    <Route
                        exact
                        path='/search'
                        render={() => <ListBooks key={id} books={this.state.books}/>}/>
                </div>

            </div>

        );

    }
}

export default App;