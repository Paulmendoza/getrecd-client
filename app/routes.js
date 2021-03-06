import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from './components/Main'
import Home from './components/Home'
import Tournaments from './containers/Tournaments'
import Tournament from './components/Tournament'

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route name="Tournaments" path="tournaments" component={Tournaments} />
    <Route name="Tournament" path="tournament" component={Tournament} />
  </Route>
);