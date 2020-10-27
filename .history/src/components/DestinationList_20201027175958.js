import React from 'react'
import {Link} from 'react-router-dom'


const DestinationList = (props) => {

    return (
    <div>
        <h3>Destination List:</h3>{props.destination.map(destination => <h5><div key={destination.id}>
            Destination Name:<Link to={`/destinations/${destination.id}`}></Link> <br><br></br></br>
            City: {destination.city} <br></br> State: {destination.state} <br></br> Description: {destination.comment} <br></br> Travel Time: {destination.travel_time}
        </div></h5>)}
    </div>
    )}


    export default DestinationList