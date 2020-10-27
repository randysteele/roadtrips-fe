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
            <DestinationList></DestinationList>
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        destinations: state.destinations
    } 
}


export default connect(mapStateToProps, {fetchDestinations})(DestinationContainer);