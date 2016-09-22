import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

import './index.css';

import App from './app/componentes/App';
import Count from './app/componentes/Count';
import Statistics from './app/componentes/Statistics';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Count}></IndexRoute>
                <Route path="statistics/" component={Statistics}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
