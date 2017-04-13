import React from 'react';

const About = React.createClass({
  render() {
    return (
      <div id='about'>
        <h1>About me</h1>
        <div className="leadText">
          <p>I'm Andrei Calazans, a Front-End and JavaScript Developer living in the state of Espirito Santo in Brazil. With extreme passion for
           development. In 2016 I decided to learn Development, since then I have been developing Web Apps for local stores and entrepreneurs. I am
         experienced with single page apps and Content Management Systems(CMS).</p>

        </div>
        <div className="text">
          <p>Clients usually approach me when they need a developer who can provide:</p>
          <ul>
            <li>Responsive Websites</li>
            <li>Web Apps for businesses</li>
            <li>eCommerce Apps</li>
            <li>Front-End development in general</li>
          </ul>
        </div>
        <div className="text">
          <p>Besides being a normal person, I'm also very enthusiastic and focused in what i want. I spend my time learning more about Development
            or with my beloved wife.</p>
          <p>I am an undergraduate of Civil Engineering at Pitagoras College of Linhares, where I apply my knowledge about structures and mechanics of fluids
          with programming. I pretend to pursuit career in Development even though I'm still studying Civil Engineering. The basic principles of Mathematics and logic have helped
        me throughout my pursuit to learn and become a better Developer.</p>

               <h5>Technologies I have worked with:</h5>
               <p className='stack'>
                 <i className="devicon-css3-plain-wordmark colored"></i>
                 <i className="devicon-html5-plain-wordmark colored"></i>
                 <i className="devicon-react-original-wordmark colored"></i>
                 <i className="devicon-nodejs-plain-wordmark colored"></i>
                 <i className="devicon-mongodb-plain-wordmark colored"></i>
                 <i className="devicon-mysql-plain-wordmark colored"></i>
                 <i className="devicon-mocha-plain colored"></i>
                 <i className="devicon-linux-plain colored"></i>
                 <i className="devicon-bootstrap-plain-wordmark colored"></i>
                 <i className="devicon-foundation-plain-wordmark colored"></i>
                 <i className="devicon-git-plain-wordmark colored"></i>
                 <i className="devicon-github-plain-wordmark colored"></i>
                 <i className="devicon-heroku-plain-wordmark colored"></i>
                 <i className="devicon-javascript-plain colored"></i>
                 <i className="devicon-jquery-plain-wordmark colored"></i>
                 <i className="devicon-ubuntu-plain-wordmark colored"></i>
                 <i className="devicon-babel-plain colored"></i>
                 <i className="devicon-atom-original-wordmark colored"></i>
               </p>
        </div>
      </div>
    )
  }
});

export default About;
