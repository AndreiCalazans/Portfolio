import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory , Route, IndexRoute} from 'react-router';
import './style/style.scss';

import Main from './components/Main.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='/about' component={About}></Route>
      <Route path='/portfolio' component={Portfolio}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
)
