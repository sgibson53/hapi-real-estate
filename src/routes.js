import React from 'react';
import {Router, Route, Redirect, Link, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Construction from './components/Construction';


export default (
    <Route component={App}>
      <Redirect from='/' to="/construction" />
      <Route path="/construction" component={Construction} />
      <Redirect from='/beta' to="/home" component={Home} />
      <Route path="/home" component={Home} />
    </Route>
);
