import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Resume from './Resume.js';
import Projects from './Projects.js';
import './index.css';

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Resume}/>
            <Route path="/projects" component={Projects}/>
        </Route>
    </Router>
), document.getElementById('root'));
