import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationEdit from '../components/DestinationEdit'
import DestinationInput from '../components/DestinationInput'
import DestinationList from '../components/DestinationList'
import DestinationShow from '../components/DestinationShow'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class DestinationContainer extends React.Component {

    componentDidMount(){
        this.props.fetchDestinations()
    }  

render(){
    return(
        <div>
            <Router>
            <Route path='/destinations/new' component={DestinationInput}/>
            <Route path='/destinations/:id' render={(routerProps) => <DestinationShow {...routerProps} destinations={this.props.destinations}/>}/>
            <route path='/destinations' render={(routerProps) => <DestinationList {...routerProps} destinations={this.props.destinations}/>}/>
            </Router> </div>
        
    )
}
}

const mapStateToProps = state => {
    return {
        destinations: state.destinations
    } 
}


export default connect(mapStateToProps, {fetchDestinations})(DestinationContainer);