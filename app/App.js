import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/TournamentStore.js';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

const render = () => {
    ReactDOM.render(
        <Router history={ hashHistory }>{routes}</Router>,
        document.getElementById('app')
    )
}

store.subscribe(render);
render();
