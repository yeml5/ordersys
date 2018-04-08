/**
 * Created by yeml5 on 2018/4/8.
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as oaAction from '../actions/Auth'

class OaRequest extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        let url='http://gz.gd.unicom.local/open/oauth2/auth/?scope=&state=&redirect_uri=http%3A%2F%2F10.117.227.124%3A3000%2b2i_ordersys%2Foa_call_back&response_type=code&client_id=yeml5_b2iordersys';
        this.props.actions.oaRedirect(url)
    }

    render() {
        return (<div className="text-center" >立即跳转OA进行校验，如无反应请点击这里<a href="/b2i_ordersys/login">登录</a></div>)
    }
}

function mapStateToProps(state) {
    return { isAuthenticating:state.Auth.isAuthenticating}
}

function mapDispatchToProps(dispatch){
    return {
        dispatch,
        actions:bindActionCreators(oaAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OaRequest)