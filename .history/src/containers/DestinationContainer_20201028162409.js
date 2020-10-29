import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationEdit from '../components/DestinationEdit'
import DestinationInput from '../components/DestinationInput'
import DestinationList from '../components/DestinationList'
import DestinationShow from '../components/DestinationShow'
import {Route, Switch} from 'react-router-dom'


class DestinationContainer extends React.Component {

    componentDidMount(){
        this.props.fetchDestinations()
    }  

render(){
    return(
        <div>
            <Route path='/destinations/new' component={DestinationInput}/>
            <Route path='/destinations/:id' render={(routerProps) => <DestinationShow {...routerProps} destinations={this.props.destinations}/>}/>
            <route path='/destinations' render={(routerProps) => <DestinationsList {...routerProps} destinations={this.props.destinations}/>}/>
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