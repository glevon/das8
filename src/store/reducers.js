import {signupReducer} from './signup/reducer'
import {loginReducer} from './login/reducer'
import {profileReducer} from './profile/reducer'
import {combineReducers} from 'redux'

export default combineReducers({
    signupReducer,
    loginReducer,
    profileReducer
})