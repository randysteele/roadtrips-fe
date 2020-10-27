import React from 'react'


const DestinationList = (props) => {

    return (
    <div>
        {props.destinations.map(dest => <div key={dest.id}>{dest.name} <br></br> {dest.city} <br></br>  {dest.state} <br></br>  {dest.comment} <br></br>  {dest.travel_time} Hours</div>)}
   </div>
    )}


    export default DestinationList