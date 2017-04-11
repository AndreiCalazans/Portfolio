import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory , Route, IndexRoute} from 'react-router';
import './style/style.scss';

import Main from './components/Main.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import ProjectDisplay from './components/ProjectDisplay.js';
import Contact from './components/Contact.js';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/portfolio' component={Portfolio}></Route>
      <Route path='/:projectName' component={ProjectDisplay}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
)
