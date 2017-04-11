import React from 'react';
import {Link , IndexLink} from 'react-router';
import Footer from './Footer';
import Nav from './Nav';
import SideNav from './SideNav';
const Main = React.createClass({
  toggleSideNav: function() {
    let sideNav = document.getElementById('sideNav');
    if (sideNav.style.left === '' || sideNav.style.left === '0px'){
      sideNav.style.left = '-100%';
    }
  },
  render() {
    return (
      <div ref='body'>
        <Nav></Nav>
        <div onClick={this.toggleSideNav}>

          <SideNav></SideNav>
        </div>
        <div onClick={this.toggleSideNav}>
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    )
  }
});

export default Main;
