import React from 'react'
import DestinationInput from '../components/DestinationInput'

class DestinationContainer extends React.Component {

render(){
    return(
        <div>
            <DestinationInput destinations={this.props.destinaitons}/>


        </div>
    )
}

}







export default DestinationContainer