import React from 'react'

class DestinationEdit extends React.Component {

    state = {
        name: '',
        city: '',
        state: '',
        comment: '',
        travel_time: ''
    }

    handleChange = (event) > {
        this:setState({
            [event.target.name]: event.target.value
        })
    }
}