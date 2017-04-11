import React from 'react';
import {Link} from 'react-router';
const Home = React.createClass({
  render() {
    return (
      <div id='home'>
        <div className='col s12 intro'>
          <h1 id='jobTitle'></h1>
        </div>
        <div className="row col s12">
          <div className="row col">
            <div className="col s12 m8 ">
              <div className='hide-on-small-only medium-box'>
                <hr/>
                <div className="col m6 s12">
                  <h3>What do I offer?</h3>
                  <blockquote>
                    <p>
                      I'm a Front-end Developer based in Brazil. I develop responsive high-perfomance websites and webapps with
                      javascript and the industries lastest technology.
                    </p>
                  </blockquote>
                </div>
                <div className="col m6 s12">
                  <h3>Contact me</h3>
                  <blockquote>
                    <p>
                      Feel free to get in touch, I'm always happy discuss and advise on your project or development needs.
                    </p>
                    <p>+55 (27) 99528-5511</p>
                    <a className='contact-email' href="mailto:andreixoc@hotmail.com">Andreixoc@hotmail.com</a>
                  </blockquote>
                </div>
              </div>
              <div className='hide-on-med-and-up'>
                <div className="small-container col m6 s12">
                  <Link to='/about'>
                  <div>
                    <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                    <h3>What do I offer?</h3>
                  </div>
                    <i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
                  </Link>

                </div>
                <div className="small-container col m6 s12">
                  <Link to='/contact'>
                  <div>
                    <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                    <h3>Contact me</h3>
                  </div>
                    <i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
                  </Link>
                </div>
                <div className="small-container col m6 s12">
                  <Link to='/portfolio'>
                  <div>
                    <i className="fa fa-laptop fa-2x" aria-hidden="true"></i>
                    <h3>Portfolio</h3>
                  </div>
                    <i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
                  </Link>
                </div>
                <div className="small-container col m6 s12">
                  <Link to='/portfolio'>
                  <div>
                    <i className="fa fa-file-text fa-2x" aria-hidden="true"></i>
                    <h3>Resume</h3>
                  </div>
                    <i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="img-box hide-on-small-only col s4">
              <Link to='/portfolio'>
              <i className="fa fa-chevron-right fa-4x" aria-hidden="true"></i>
              </Link>
              <img className='top-img' src={require('../images/votingApp.png')} alt=""/>
              <img className='bottom-img' src={require('../images/codeBase.png')} alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Home;
