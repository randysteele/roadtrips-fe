import React from 'react'


const DestinationList = (props) => {

    return (
    <div>
        {props.destinations.map(dest => <li key={dest.id}>{dest.name} <br></br> {dest.city} <br></br>  {dest.state} <br></br>  {dest.comment} <br></br>  {dest.travel_time} Hours</li>)}
   </div>
    )}


    export default DestinationList