import React from 'react';
import {portfolios} from '../portfolioSeed/index';
import {Link} from 'react-router';
var Carousel = require('nuka-carousel');
const ProjectDisplay = React.createClass({
  display: function() {
    let nameOfApp = this.props.params.projectName;

    function renderImgs(imgs) {
      let counter = 0;
      return imgs.map((each) => {
        console.log(counter);
        counter++;
        return <img key={counter} src={each}/>
      })
    };
    // filter this portfolio
    return portfolios.filter((each) => {
      return each.name === nameOfApp;
    }).map((each) => {
      return (
        <div id='displayProject' key='1'>
          {/* <img  src={each.img} alt=""/> */}
          <div id='carouselContainer' >
            <Carousel>
              {renderImgs(each.displayImages)}
            </Carousel>
          </div>
          <div className="info" style={{background: each.color}}>
            <h1>{each.name}</h1>
            <hr/>
            <a href="">{each.url}</a>
            <h3>HTML CSS JS REACTJS</h3>
            <p>{each.info}</p>
            <p>{each.completeInfo}</p>
          </div>
        </div>
      )
    });
  },
  render() {

    return (
      <div>
        <div>
          <Link to='/portfolio'>
          <p id='goBack'>
            <i  className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
          </p>
          </Link>
        </div>
        {this.display()}
      </div>
    )
  }
});

export default ProjectDisplay;
