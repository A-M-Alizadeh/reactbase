import {combineReducers} from 'redux'
import {jwt,userDataReducer,defaultSpecReducer} from './loginReducers'
import rehidrated from './rehidrateReducer'

export default combineReducers({
    rehidrated,
    jwt,
    userDataReducer,
    defaultSpecReducer,
})

