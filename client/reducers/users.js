import axios from 'axios'

const apiUrl = '/api/users/'

const ADD_ALL_USERS = "FETCH_USERS"
const ADD_USER = "ADD_USER"
const REMOVE_USER = "REMOVE_USER"
const EDIT_USER = "EDIT_USER"


const addAllUsers = users => ({
    type: ADD_ALL_USERS,
    users
})

const addUser = user => ({
    type: ADD_USER,
    user
})

const removeUser = user => ({
    type: REMOVE_USER,
    user
})

const editUser = (oldName, updatedUser) => ({
    type: EDIT_USER,
    oldName,
    updatedUser
})

export const updateUser = (oldName, updatedUser) => dispatch => {
    const url = `${apiUrl}${oldName}`
    axios.put(url, updatedUser)
        .then(res => res.data)
        .then(updatedUser => dispatch(editUser(oldName, updatedUser)))
}

export const deleteUser = user => dispatch => {
    const url = `${apiUrl}${user.name}`
    axios.delete(url)
        .then(() => dispatch(removeUser(user)))
}

export const fetchAllUsers = () => dispatch => {
    axios.get(apiUrl)
        .then(res => res.data)
        .then(users => dispatch(addAllUsers(users)))
}

export const postUser = user => dispatch => {
    axios.post(apiUrl, user)
        .then(res => res.data)
        .then(user => dispatch(addUser(user)))
}

export default function userReducer(users = [], action) {
    switch (action.type) {
        case ADD_ALL_USERS:
            return action.users
        case ADD_USER:
            return users.concat(action.user)
        case REMOVE_USER:
            return users.filter(user => user.name !== action.user.name)
        case EDIT_USER:
            return users.map(user => user.name === action.oldName ? action.updatedUser : user)
        default:
            return users
    }
}