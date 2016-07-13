import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import Tournaments from '../components/Tournaments/Tournaments'
import Contact from '../components/Contact'
import { Route, IndexRoute } from 'react-router'

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route name="Tournaments" path="tournaments" component={Tournaments} />
    <Route name="Contact" path="contact" component={Contact} />
  </Route>
);