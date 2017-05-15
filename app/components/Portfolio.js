import React from 'react';
import PortfolioBox from './portfolioBox';
import {portfolios} from '../portfolioSeed/index';
const Portfolio = React.createClass({
  render() {
    function renderPortfolio() {
      return portfolios.map((each, index) => {
        return <PortfolioBox key={index}  bgColor={each.bgColor} color={each.color} img={each.img}  name={each.name} info={each.info}></PortfolioBox>
      })
    };
    return (
      <div id='portfolio' className='col'>
        <div className="boxContainer">
        {renderPortfolio()}

        </div>
      </div>
    )
  }
});

export default Portfolio;
