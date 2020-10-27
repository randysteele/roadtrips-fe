export default function destinations(state = {destinations: []}, action) {
    
    switch(action.type){
        case 'FETCH_DESTINATIONS':
          return {destinations: action.payload}
        case 'ADD_DESTINATIONS':
          return {...state, destinations: [...state.destinations, action.payload]
        } 
    }
}



