import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'

const applyM = applyMiddleware(thunkMiddleware, createLogger({collapsed:true}))
const compose = composeWithDevTools(applyM)
const store = createStore(rootReducer, compose)

export default store