import React from 'react'
import {Link} from 'react-router-dom'


const DestinationList = (props) => {

    return (
    <div>
<h2> Destination List:</h2> {props.destinations.map(dest => <h5><div key={dest.id}>Lake Name:<Link to={`/destinations/${dest.id}`}><br></br>{dest.name}</Link>  <br></br> City: {dest.city} <br></br> State: {dest.state} <br></br> </div></h5>)}
    </div>
    )}


    export default DestinationList