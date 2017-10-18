import React from 'react'
import { Route }  from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Bookshelf from './Bookshelf'
import  {Link} from 'react-router-dom'

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
            console.log(this.state.books)
    }

     /*addBook(book) {
        BooksAPI.update(book,shelf).then(book => {
            this.setState({book.shelf:shelf})

            )
        }

        )
    }*/
    render() {
        console.log('All books')    
        console.log(this.state.books)
        return (
            <div className='app'>
            <Route exact path='/' render={() => 
                    <Bookshelf
                    books={this.state.books}/>
                } />
                
                 <Route exact path='/search' render={() => 
                    <ListBooks books={this.state.books}/>
                } />                 
            </div>
            
         
        );
    }
}

export default App;