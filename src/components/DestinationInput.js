import React from 'react'

class DestinationInput extends React.Component {

    state = {
        name: '',
        city: '',
        state: '',
        comment: '',
        travel_time: ''
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
       this.props.addDestination(this.state, this.props.history)    
       this.setState({
        name: '', 
        city: '', 
        state: '', 
        comment: '',
        travel_time: ''
       })    
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                <label>Destination Name: </label>
                <input type="text" placeholder="Destination Name: " value={this.state.name} name="name" onChange={this.handleChange}></input>
                <label>City: </label>   
                <input type="text" placeholder="City: " value={this.state.city} name="city" onChange={this.handleChange}></input>
                <label>State: </label>   
                <input type="text" placeholder="State: " value={this.state.state} name="state" onChange={this.handleChange}></input>
                <label>Travel Time:</label>
                <input type="number" placeholder="TraveTime: " value={this.state.travel_time} name="travel_time" onChange={this.handleChange}></input>  
                <label>Comment: </label>   
                <textarea  type="text" placeholder="Comment: " value={this.state.comment} name="comment"  onChange={this.handleChange}>
                </textarea>
                <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default DestinationInput