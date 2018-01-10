/**
 * Created by sve on 10.11.2017 г..
 */
import counter from './reducers/counterReducer'
import inputer from './reducers/inputReducer'
import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import fetchData from './counter/fetchData'

const store = createStore(combineReducers({
    counter,
    inputer
},applyMiddleware(thunk)
))

store.dispatch(fetchData())

export default store