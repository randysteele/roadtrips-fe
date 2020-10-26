export function fetchDestinations() {
    return (dispatch) => {
     fetch("http://localhost:3000/destinations")
      .then(response => response.json())
      .then(destinations => dispatch({
        type: 'FETCH_DESTINATIONS',
         payload: destinations
      }))
    }
  }