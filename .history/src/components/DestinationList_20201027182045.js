import React from 'react'


const DestinationList = (props) => {

    return (
    <div>
        {props.destinations.map(dest => <li key={dest.id}>{dest.name} - {dest.city} - {dest.state} - {dest.comment} - {dest.travel_time}Hours</li>)}
   </div>
    )}


    export default DestinationList