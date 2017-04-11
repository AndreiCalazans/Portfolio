import React from 'react';

import {IndexLink , Link} from 'react-router';

const SideNav = React.createClass({
  render() {
    return (
      <div id='sideNav'>
        <ul>
          <li>
            <IndexLink activeClassName='active' to='/'>Home</IndexLink>
          </li>
          <li>
            <Link activeClassName='active' to='/about'>About</Link>
          </li>
          <li>
            <Link activeClassName='active' to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link activeClassName='active' to='/contact'>Contact</Link>
          </li>
        </ul>
        <div>
          <ul >
            <li>
              <a className='github' target='blank_' href="https://github.com/AndreiCalazans"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
            </li>
            <li>
              <a className='linkedin' target='blank_' href="https://www.linkedin.com/in/andrei-xavier-de-oliveira-calazans-8b1269115/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
            </li>
            <li>
              <a className='twitter' target='blank_' href="https://twitter.com/Andrei_Calazans"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

export default SideNav;
