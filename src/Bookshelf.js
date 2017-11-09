import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Books from './Books'

class Bookshelf extends Component {
  static propTypes = {
    updatebook: PropTypes.func.isRequired,
    findbook: PropTypes.func.isRequired,
    
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

      return (<Books
        selectedbooks={filterbooks}
        title={bookshelftype.title}
        findbook={this.props.findbook}
        updatebook={this.props.updatebook} />)
    }))

  }
}
export default Bookshelf
