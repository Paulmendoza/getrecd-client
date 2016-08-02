import React, { Component, PropTypes } from 'react'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import routes from './routes';
import { hashHistory } from 'react-router';
import reducer from './reducers/GetRecd';

const store = createStore(combineReducers({tournaments: reducer, routing: routerReducer}))
const history = syncHistoryWithStore(hashHistory, store)

export default class App extends Component {
    render() {
        return (
            <Provider store={ store }>
            <div>
                <Router history={ history } routes={ routes } />
            </div>
            </Provider>
        )
    }
}