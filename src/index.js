import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './container/LoginPage'
import IndexPage from './container/IndexPage'
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers'
import OaRequest from './components/OaRequest'
import OaCallBack from './components/OaCallBack'


let middleware=[ thunk ] ;
const store=createStore(reducers,applyMiddleware(...middleware));

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      store.getState().Auth.isAuthenticated ? (
      <Component {...props}/>):(
          <Redirect to={{pathname:'/b2i_ordersys/login'}}/>
      )
  )}/>
);

const OaRoute =({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      store.getState().Auth.isAuthenticated ? (
      <Redirect to={{pathname:'/b2i_ordersys/index'}}/>):(
          <Component {...props}/>
      )
  )}/>
);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <OaRoute path="/b2i_ordersys/oa" component={OaRequest}/>
                <Route path="/b2i_ordersys/oa_call_back" component={OaCallBack}/>
                <Route path="/b2i_ordersys/login" component={LoginPage} />
                <AuthenticatedRoute path="/b2i_ordersys/index" component={IndexPage}>
                    <Route>
                    </Route>
                    <Route>
                    </Route>
                </AuthenticatedRoute>
            </div>
        </BrowserRouter>
    </Provider>
    ), document.getElementById('root'));
registerServiceWorker();
