import React from 'react';

const Home = React.createClass({
  render() {
    return (
      <div id='home'>
        <div className='col s12 intro'>
          <h1>Front-End Developer</h1>
        </div>
        <div className="row col s12">
          <div className="row col">
            <div className="col s12 m8 ">
              <div className="col m6 s12">
                <h3>What do i do?</h3>
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </blockquote>
              </div>
              <div className="col m6 s12">
                <h3>Contact me</h3>
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="img-box hide-on-small-only col s4">
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
