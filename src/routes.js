import React from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Construction from './components/Construction';


export default (
    <Route component={App}>
      <Route path='/' component={Construction} />  
    </Route>
);
