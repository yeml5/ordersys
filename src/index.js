import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './container/LoginPage'
import IndexPage from './container/IndexPage'
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers'

const store=createStore(reducers);

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      store.getState().Auth.isAuthenticated ? (
      <Component {...props}/>):(
          <Redirect to={{pathname:'/b2i_ordersys/login'}}/>
      )
  )}/>
);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter path="/b2i_ordersys">
            <div>
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

            /**<Route path="/b2i_ordersys/catch_up" component={}>
                <Route path="/b2i_ordersys/catch_up/menu1" component={}>
            </Route>**/