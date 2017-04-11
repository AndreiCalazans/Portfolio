import React from 'react';
import {portfolios} from '../portfolioSeed/index';
var Carousel = require('nuka-carousel');
const ProjectDisplay = React.createClass({
  display: function() {
    let nameOfApp = this.props.params.projectName;
    // filter this portfolio
    return portfolios.filter((each) => {
      return each.name === nameOfApp;
    }).map((each) => {
      return (
        <div id='displayProject' key='1'>
          {/* <img  src={each.img} alt=""/> */}
          <Carousel>
             <img src={each.displayImages[0]}/>
             <img src={each.displayImages[1]}/>
             <img src={each.displayImages[2]}/>

         </Carousel>
          <div className="info" style={{background: each.color}}>
            <h1>{each.name}</h1>
            <hr/>
            <a href="">thisapp.com</a>
            <h3>HTML CSS JS REACTJS</h3>
            <p>{each.info}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque rem, blanditiis quam modi aspernatur odio
              accusantium commodi dolor ab nulla harum quibusdam ullam reprehenderit porro vitae eius, facere similique. Sint!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque rem, blanditiis quam modi aspernatur odio
                accusantium commodi dolor ab nulla harum quibusdam ullam reprehenderit porro vitae eius, facere similique. Sint!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque rem, blanditiis quam modi aspernatur odio
                  accusantium commodi dolor ab nulla harum quibusdam ullam reprehenderit porro vitae eius, facere similique. Sint!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque rem, blanditiis quam modi aspernatur odio
                    accusantium commodi dolor ab nulla harum quibusdam ullam reprehenderit porro vitae eius, facere similique. Sint!</p>
          </div>
        </div>
      )
    });
  },
  render() {
    return (
      <div>
        {this.display()}
      </div>
    )
  }
});

export default ProjectDisplay;
