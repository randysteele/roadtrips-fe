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
        description: ''
       })    
    }

}

export default DestinationInput