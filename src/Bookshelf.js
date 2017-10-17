import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import Book from './Book'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    let bookshelftypes = {
        currentlyReading:'Currently Reading',
        wantToRead:'Want To Read',
        read:'Read',      
    }




  
    return ( Object.keys(bookshelftypes).forEach((bookshelftype) => {

      const filterbooks = this
        .props
        .books
        .filter((currentbook) => currentbook.shelf === 'currentlyReading')
        console.log(filterbooks)
        console.log(bookshelftypes[bookshelftype])

      return (<Book selectedbooks={filterbooks} title='currentlyReading'/>)
    }))
  }
}
export default Bookshelf
