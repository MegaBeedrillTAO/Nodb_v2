import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware'
import infoReducer from './Reducers/infoReducer';
import pageReducer from './Reducers/pageReducer'


const rootReducer = combineReducers({
    infoReducer,
    pageReducer
})

export default createStore(rootReducer, applyMiddleware(promise));