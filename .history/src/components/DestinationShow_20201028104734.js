import React from 'react'



const DestinationShow = (props) => {

    return (
        <div>
            {destination ? destination.name : null} - {destination ? destination.city : null} - 
            {destination ? destination.state : null} - 
        </div>
    )

}

export default DestinationShow