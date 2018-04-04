import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './container/LoginPage'

ReactDOM.render(<LoginPage />, document.getElementById('root'));
registerServiceWorker();
