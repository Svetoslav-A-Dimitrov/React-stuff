/**
 * Created by zlatii on 16/11/2017.
 */
import {login, register} from './../api/remote'
import {REGISTER_SUCCESS, LOGIN_SUCCESS, REDIRECTED} from '../actions/actionTypes'

function registerSuccsess() {
    return{
        type: REGISTER_SUCCESS
    }
}
function loginSuccsess() {
    return{
        type: LOGIN_SUCCESS
    }
}
export function redirect() {
    return{
        type: REDIRECTED
    }
}

function registerAction(name, email, password) {
    return (dispatch)=>{
       return register(name, email, password)
            .then(res=>{
                if(res.success){
                    dispatch(registerSuccsess())
                }
            })
    }
}
function loginAction(email, password) {
    return (dispatch)=>{
        "use strict";
        return login(email, password)
            .then(token=>{
                localStorage.setItem('authToken', token.token)
                localStorage.setItem('user', token.user.name)
                dispatch(loginSuccsess())
            })
    }
}

export {registerAction, loginAction}