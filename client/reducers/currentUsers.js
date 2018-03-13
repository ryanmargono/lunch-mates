import axios from 'axios'

const apiUrl = '/api/users/current/'

const ADD_ALL_CURRENT = "ADD_ALL_CURRENT"
const REMOVE_CURRENT = "REMOVE_CURRENT"
const REPLENISH_CURRENT = "REPLENISH_CURRENT"

const addAllCurrent = users => ({
    type: ADD_ALL_CURRENT,
    users
})

const removeCurrent = user => ({
    type: REMOVE_CURRENT,
    user
})

export const replenishCurrent = users => ({
    type: REPLENISH_CURRENT,
    users
})

export const deleteCurrent = user => dispatch => {
    const url = `${apiUrl}${user.name}`
    axios.delete(url)
        .then(() => dispatch(removeCurrent(user)))
}

export const fetchAllCurrent = () => dispatch => {
    axios.get(apiUrl)
        .then(res => res.data)
        .then(users => dispatch(addAllCurrent(users)))
}

function currentReducer(users=[], action){
    switch(action.type){
        case ADD_ALL_CURRENT:
            return action.users
        case REPLENISH_CURRENT:
            return action.users
        case REMOVE_CURRENT:
            return users.filter(user => user.name !== action.user.name)
        default:
            return users
    }
}

export default currentReducer