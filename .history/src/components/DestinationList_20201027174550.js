import React from 'react'
import {Link} from 'react-router-dom'


const DestinationList = (props) => {

    return (
    <div>
        <h3>Destination List:</h3>{props.destinations.map(destination => <h5><div key={destination.id}>
            Destination Name:<Link to={`/destinations/${destination.id}`}></Link> <br><br></br></br>
        
        </div></h5>)}
    </div>
    )}
