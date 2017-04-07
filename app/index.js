import React from 'react';
import ReactDOM from 'react-dom';

import './style/style.scss';
var Hello = React.createClass({
  render() {


    return (
      <div>
        <h1 >Hi, this is am image and this is your BOILERPLATE</h1>
        <img src={require('./images/image.png')} alt=""/>
        <p>I am green</p>
        <p className='teal'>i am teal</p>

      </div>
    )
  }
});


ReactDOM.render(
  <Hello></Hello>,
  document.getElementById('root')
)
