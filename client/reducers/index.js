import { combineReducers } from 'redux'
import users from './users'
import history from './history'
import current from './currentUsers'

const rootReducer = combineReducers({ users, history, current })

export default rootReducer