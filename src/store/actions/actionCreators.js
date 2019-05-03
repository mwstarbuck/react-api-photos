export const photoFetched = () => {

    // redux thunk was used as a middleware which allowed us to access
    // dispatch in the action creators
    return dispatch => {

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                dispatch({ type: 'PHOTOS_FETCHED', photos: json })
            })

    }
}
