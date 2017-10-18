import React, {Component} from 'react'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'

class Shelf extends Component {
    static propTypes = {
        shelf: PropTypes.string.isRequired
    }
    handleChange = (evt) => {
        console.log("VALUE"+evt.target.value)
        const values = serializeForm(evt.target, {hash: true})

        if (this.props.onAddBook) 
            this.props.onAddBook(values)
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
