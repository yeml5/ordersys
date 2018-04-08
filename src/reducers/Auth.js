/**
 * Created by yeml5 on 2018/4/4.
 */
import {LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_OA_REQUEST,
    LOGIN_OA_SUCCESS,
    LOGIN_OA_FAILURE,} from '../actions/ActionConfig'

const initialState={
    isAuthenticated:true,
    isAuthenticating:false,
    authData:{'userName':'yeml5',}
};


export function Auth (state=initialState,action) {
    switch (action.type){
        case LOGIN_USER_REQUEST:
            return {isAuthenticating:true,isAuthenticated:false};
        case LOGIN_USER_FAILURE:
            return {isAuthenticating:false,isAuthenticated:false};
        case LOGIN_USER_SUCCESS:
            return {isAuthenticating:false,isAuthenticated:true,authData:action.token};
        case LOGIN_OA_REQUEST:
            return {isAuthenticating:true,isAuthenticated:false};
        case LOGIN_OA_SUCCESS:
            return {isAuthenticating:false,isAuthenticated:true};
        case LOGIN_OA_FAILURE:
            return {isAuthenticating:false,isAuthenticated:false};
        default:
            return state;
    }
}
