import React from 'react'


const DestinationList = (props) => {

    return (
    <div>
        {props.destinations.map(dest => <div key={dest.id}><br></br>Name: {dest.name} <br></br> City: {dest.city} <br></br>  State: {dest.state} <br></br>  Comment: {dest.comment} <br></br>  Travel time(hours): {dest.travel_time} <br></br>{dest.comment}</div>)}
   </div>
    )}


    export default DestinationList