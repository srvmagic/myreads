import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Shelf extends Component {
   
    static propTypes = {
        shelf: PropTypes.string.isRequired,
        
    }
  
    handleChange = (evt) => {
        if (this.props.onChangeShelf) {
            this.props.onChangeShelf(evt.target.value)
        }            
    }
    render() {

        return (

            <div className="book-shelf-changer">
                <select defaultValue={this.props.shelf} onChange={this.handleChange}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>

        )
    }

}

export default Shelf
