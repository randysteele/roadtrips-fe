import React from 'react'

class DestinationEdit extends React.Component {

    state = {
        name: '',
        city: '',
        state: '',
        comment: '',
        travel_time: ''
    }

    handleChange = (e) > {
        this:setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
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
}