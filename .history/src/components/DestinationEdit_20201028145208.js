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
}