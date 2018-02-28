const ADD_PICTURES = 'ADD_PICTURES'
const CLEAR_PICTURES = 'CLEAR_PICTURES'

export const addPictures = pictures => ({ type: ADD_PICTURES, pictures })

export const clearPictures = () => ({ type: CLEAR_PICTURES })

function pictureReducer(pictures = [], action) {
    switch (action.type) {
        case ADD_PICTURES:
            return [action.pictures, ...pictures]
        case CLEAR_PICTURES:
            return []
        default:
            return pictures
    }
}

export default pictureReducer