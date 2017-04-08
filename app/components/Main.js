import React from 'react';
import {Link , IndexLink} from 'react-router';
import Footer from './Footer';
const Main = React.createClass({
  render() {
    return (
      <div >
        <nav>
         <div className="nav-wrapper">
           <Link to='/' style={{position: 'relative'}} className="col s-2 left brand-logo"><i>Andrei Calazans_</i></Link>
           <ul id="nav-mobile" className='left' >
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
       </div>
       </nav>
        {this.props.children}
        <Footer></Footer>
      </div>
    )
  }
});

export default Main;
