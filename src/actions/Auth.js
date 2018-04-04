/**
 * Created by yeml5 on 2018/4/4.
 */
import {LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE} from "./ActionConfig"

export function LoginUserRequest() {
    return{type:LOGIN_USER_REQUEST}
}

export function LoginUser() {
    return (dispatch)=>{
        dispatch(LoginUserRequest());

    }
}