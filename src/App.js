import React from 'react';
import { Route }  from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
//import AddBooks from './AddBooks'
import Bookshelf from './Bookshelf'

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
            this.setState(state => ({
                books: state.books.concat([book])
            })

            )
        }

        )
    }*/
    render() {
        return (
            <div className='app'>
            <Route exact path='/' render={() => 
                    <Bookshelf
                    books={this.state.books}/>
                } />
            </div>
         
        );
    }
}

export default App;