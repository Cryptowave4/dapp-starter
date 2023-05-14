import React from 'react';
import tableImage from '../table.png';
import wheelImage from '../wheelsp1.png';
import ballImage from '../ball2.png';

function RouletteComponent() {
  const rouletteContainerStyles = {
    inlineSize: '1280px',
    blockSize: '720px',
    position: 'relative',
    backgroundImage: 'url(../bg1.jpg)',
    backgroundSize: 'cover'
  };

  return (
    <div>
      <div className="roulette-container" style={rouletteContainerStyles}>
        <div className="inner-container">
          <img src={tableImage} alt="Roulette table" className="roulette-table" />
          <div className="wheel-container">
            <img src={wheelImage} alt="Roulette wheel" className="roulette-wheel" />
            <div className="ball-container">
              <img src={ballImage} alt="Roulette ball" className="roulette-ball" />
            </div>
          </div>
        </div>
        <div className="betting-fields-container">
          <div></div>
          {/* Add more rows of betting fields here */}
        </div>
      </div>
    </div>
  );
}

export default RouletteComponent;
