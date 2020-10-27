import React from 'react'
import {Link} from 'react-router-dom'


const DestinationList = (props) => {

    return (
    <div>
   {props.destinationList.map(dest => <li key={dest.id}>{dest.name} - {dest.city} - {dest.state} - {dest.description}</li>)}
   </div>
    )}


    export default DestinationList