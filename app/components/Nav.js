import React from 'react';
import {IndexLink , Link} from 'react-router';



 const Nav = React.createClass({
   toggleSideNav:function() {
     let sideNav = document.getElementById('sideNav');
     if (sideNav.style.left === '' || sideNav.style.left === '0px') {
       sideNav.style.left = '-100%';
     }else if (sideNav.style.left === '-100%') {
       sideNav.style.left = '0px';
     }
   },
   render() {
     return (
       <nav>
        <div className="nav-wrapper">
          <Link to='/' style={{position: 'relative'}} className="col s-2 left brand-logo"><i>Andrei Calazans_</i></Link>
          <ul id="nav-mobile" className='left hide-on-small-only'>
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
            <li>
            <a href="./files/andrei.pdf" target='_blank' >Resume</a>
            </li>
          </ul>

          <ul id='nav-mobile' className="hide-on-small-only right">
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
          <div className="hide-on-med-and-up" id='sidenav-bar'>
            <i onClick={this.toggleSideNav}  className="fa fa-bars fa-2x" aria-hidden="true"></i>
          </div>
      </div>
      </nav>
     )
   }
 })

 export default Nav;
