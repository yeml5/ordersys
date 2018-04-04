/**
 * Created by yeml5 on 2018/4/4.
 */
import {LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE} from "./ActionConfig"
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

export function LoginUser() {
    return (dispatch)=>{
        dispatch(LoginUserRequest());
    return fetch("http://gz.gd.unicom.local/open/oauth2/auth/",{
        method:'post',
        header:{},
        data:{'response_type': 'code',
            'client_id': 'yeml5_b2iordersys',
            'redirect_uri': 'http://10.117.227.124:3000/',
            'state': '', 'scope': scope
        }})
        .then((response)=>{
            dispatch(LoginUserSuccess(response.token,response.user));
            dispatch(push("/b2i_ordersys/index"))
        })
        .catch((error)=>{
        })
    }
}
