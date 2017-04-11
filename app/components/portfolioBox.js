import React from 'react';
import {browserHistory} from 'react-router';
const PortfolioBox = React.createClass({
  displayBig: function() {
    var {name} = this.props;
    browserHistory.push('/' + name);
  },
  render(){
    var {name , info , img, color, bgColor} = this.props;
    return (
      <div onClick={this.displayBig} className="box" style={{background: bgColor}}>
        <figure className="img-portfolio responsive-img">
          <img src={img} alt=""/>
        </figure>
        <div className="info" style={{background: color}}>
          <h3>{name}</h3>
          <p>{info}</p>
        </div>
      </div>
    )
  }
});

export default PortfolioBox;
