const initialState = {
    photos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PHOTOS_FETCHED':
            return {
                ...state,
                photos: action.photos
            }
    }
    return state
}
export default reducer