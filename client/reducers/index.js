import { combineReducers } from 'redux'
import pictures from './pictures'
import results from './results'

const rootReducer = combineReducers({ pictures, results })

export default rootReducer