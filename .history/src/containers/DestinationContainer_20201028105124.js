import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationInput from '../components/DestinationInput'
import DestinationList from '../components/DestinationList'
import DestinationShow from '../components/DestinationShow'


class DestinationContainer extends React.Component {

    componentDidMount(){
        this.props.fetchDestinations()
    }  

render(){
    return(
        <div>
            <DestinationInput destinations={this.props.destinations}/>
            <DestinationList  destinations={this.props.destinations}/>
            <DestinationShow destinations={this.props.destinations}/>
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