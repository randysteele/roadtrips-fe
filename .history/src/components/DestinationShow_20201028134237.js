import React from 'react'



const DestinationShow = (props) => {

    //   let destination = props.destinations[props.match.params.id - 1]

    return (
        <div>
            {destinations.name} - 
            {destinations.city} - 
            {destinations.state} - 
            {destinations.comment} -
            {destinations.travel_time}
        </div>
    )

}

export default DestinationShow