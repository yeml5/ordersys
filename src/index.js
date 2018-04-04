import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './container/LoginPage'

ReactDOM.render(<LoginPage />, document.getElementById('root'));
registerServiceWorker();
