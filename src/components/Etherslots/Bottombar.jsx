import { useState } from 'react';

const BottomBar = ({ onStart }) => {
  const [betAmount, setBetAmount] = useState(1);
  const [isAutomatic, setIsAutomatic] = useState(false);

  const handleAutomaticToggle = () => {
    setIsAutomatic(!isAutomatic);
  };

  const handleStartClick = () => {
    onStart(betAmount, isAutomatic);
  };

  const decreaseBetAmount = () => {
    if (betAmount > 1) {
      setBetAmount(betAmount - 1);
    }
  };

  const increaseBetAmount = () => {
    if (betAmount < 20) {
      setBetAmount(betAmount + 1);
    }
  };

  return (
    <div className="bottom-bar flex justify-between items-center bg-bottom-bar h-200 w-1920">
      {/* ... */}
      <div className="automatic-bet-button relative bg-red-500 w-160 h-60 my-20 border-2 border-black overflow-hidden" onClick={handleAutomaticToggle}>
        <span className="text-white uppercase text-center w-full h-full flex items-center justify-center text-lg">Auto Bet</span>
        <div className="bet-amount-controls">
          <button className="bet-amount-button-minus bg-no-repeat bg-center bg-cover h-16 w-16" onClick={decreaseBetAmount}></button>
          <span className="bet-amount bg-bet-amount bg-no-repeat bg-center bg-cover text-white text-lg font-bold mx-10">{betAmount}</span>
          <button className="bet-amount-button-plus bg-no-repeat bg-center bg-cover h-16 w-16" onClick={increaseBetAmount}></button>
        </div>
        <button className="start-button relative bg-white w-160 h-60 my-20 border-2 border-black overflow-hidden" onClick={handleStartClick}>
          <span className="text-white uppercase text-center w-full h-full flex items-center justify-center text-lg">Start</span>
        </button>
      </div>
      {/* ... */}
    </div>
  );
};