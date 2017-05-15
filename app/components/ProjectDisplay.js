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
        counter++;
        return <img key={counter} src={each}/>
      })
    };
    // filter this portfolio
    return portfolios.filter((each) => {
      return each.name === nameOfApp;
    }).map((each , index) => {
      return (
        <div id='displayProject' key={index}>
          {/* <img  src={each.img} alt=""/> */}
          <div id='carouselContainer' >
            <Carousel>
              {renderImgs(each.displayImages)}
            </Carousel>
          </div>
          <div className="info" id='info' style={{background: each.color}}>
            <h1>{each.name}</h1>
            <hr/>
            <button id='live-site-btn'>  
             <a  href={each.url} target='_blank'>Link to the Live Version</a>
            </button>
            <h3>HTML CSS JS REACTJS</h3>
            <div>{each.info}</div>
            <div>{each.completeInfo}</div>
          </div>
        </div>
      )
    });
  },

  handleScroll(e) {
    if (window.scrollY > 50 ) {
      this.refs.btnBottom.style.display = 'none';
    }else {
      this.refs.btnBottom.style.display = 'inherit';
    }
  },

  componentDidMount: function(){
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount:function(){
    window.removeEventListener('scroll', this.handleScroll);
    
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
          <div ref='btnBottom' className="goDown">
            <a href="#info">
              <i className="fa fa-chevron-down fa-3x" aria-hidden="true"></i>
            </a>
          </div>
        {this.display()}
      </div>
    )
  }
});

export default ProjectDisplay;


