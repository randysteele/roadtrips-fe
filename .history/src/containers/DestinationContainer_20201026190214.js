import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationInput from '../components/DestinationInput'

class DestinationContainer extends React.Component {

    componentDidMount(){
        this.props.fetchDestinations()
    }  

render(){
    return(
        <div>
            <DestinationInput destinations={this.props.destinations}/>
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        destinations: destinations
    } 
}


export default connect(null, {fetchDestinations})(DestinationContainer);