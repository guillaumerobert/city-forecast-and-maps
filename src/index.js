import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';
import {Router, browserHistory} from 'react-router'; // Ou hashHistory, ou encore memoryHistory, des variantes
import routes from './routes';

ReactDOM.render(
        <Router history={browserHistory} routes={routes} />
    , document.querySelector('.appContainer'));

registerServiceWorker();
