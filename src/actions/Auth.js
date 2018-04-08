/**
 * Created by yeml5 on 2018/4/4.
 */
import {LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
LOGIN_OA_REQUEST} from "./ActionConfig"
import fetch from 'isomorphic-fetch'
import {push} from 'react-router-redux'

export function LoginUserRequest() {
    return{type:LOGIN_USER_REQUEST}
}

export function LoginUserSuccess(token,user){
    return {type:LOGIN_USER_SUCCESS,
        authData:{token,user}/** reducer**/
    }
}

export function LoginUserFailure() {
    return {type:LOGIN_USER_FAILURE}
}

export function LoginOaRequest() {
    return{type:LOGIN_OA_REQUEST}
}

export function LoginUser(data) {
    return (dispatch)=>{
        dispatch(LoginUserRequest());
    return fetch("http://127.0.0.1:8000/b2i/b2i_oa_check", {
        method: 'post',
        data: data
    })
        .then((response)=>{
            dispatch(LoginUserSuccess(data,data.staff_oa));
            dispatch(push("/b2i_ordersys/index"));
        })
        .catch((error)=>{
            dispatch(LoginUserFailure())
        })
    }
}

export function oaRedirect(url) {
    return (dispatch)=>{
        dispatch(LoginOaRequest());
        return fetch(url,{mode:'no-cors'})
            .then((res) => {
            window.location.href=url})
            .catch((error)=>{})
    }
}

