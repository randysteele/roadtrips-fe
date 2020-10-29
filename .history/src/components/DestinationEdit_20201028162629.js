import React from 'react'
import {connect} from 'react-redux'
import {editDestination} from '../actions/editDestination'


class DestinationEdit extends React.Component {

    state = {
        name: '',
        city: '',
        state: '',
        comment: '',
        travel_time: ''
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let destination = {...this.state, id: this.props.destination.id}
        this.props.editDestination(destination)
        this.setState({
            name: '',
            city: '',
            state: '',
            comment: '',
            travel_time: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Destination Name:</label>
                <input type="text" placeholder="Destination Name" value={this.state.name} name="name" onChange={this.handleChange}></input>
                <label>City:</label>
                <input type="text" placeholder="Destination City" value={this.state.city} name="city" onChange={this.handleChange}></input>
                <label>State</label>
                <input type="text" placeholder="Destination State" value={this.state.state} name="state" onChange={this.handleChange}></input></form>
                <label>Comment:</label>
                <input type="text" placeholder="Comment" value={this.state.comment} name="comment" onChange={this.handleChange}></input>
                <label>Travel Time:</label>
                <input type="text" placeholder="Travel Time" value={this.state.travel_time} name="travel_time" onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default connect(null, {editDestination})(DestinationEdit)