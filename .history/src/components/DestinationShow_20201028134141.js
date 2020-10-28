import React from 'react'



const DestinationShow = (props) => {

      let destination = props.destinations[props.match.params.id - 1]

    return (
        <div>
            {destination.name} - 
            {destination.city} - 
            {destination.state} - 
            {destination.commen} -
            {destination.travel_time}
        </div>
    )

}

export default DestinationShow