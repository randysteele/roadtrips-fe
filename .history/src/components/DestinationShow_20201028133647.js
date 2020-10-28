import React from 'react'



const DestinationShow = (props) => {

    //  let destination = props.destinations[props.match.params.id - 1]
debugger
    return (
        <div>
            {destination ? destination.name : null} - {destination ? destination.city : null} - 
            {destination ? destination.state : null} - {destination ? destination.comment: null} -
            {destination ? destination.travel_time : null }
        </div>
    )

}

export default DestinationShow