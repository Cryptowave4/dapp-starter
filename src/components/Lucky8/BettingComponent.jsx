import React from 'react';
import RouletteWheel from '@/components/Lucky8/RouletteWheel';
import BettingGrid from '@/components/Lucky8/BettingGrid';

const bettingOptions =
    [
        { option: "1", type: "straight", payout: 35 },
        { option: "2", type: "straight", payout: 35 },
        { option: "3", type: "straight", payout: 35 },
        { option: "4", type: "straight", payout: 35 },
        { option: "5", type: "straight", payout: 35 },
        { option: "6", type: "straight", payout: 35 },
        { option: "7", type: "straight", payout: 35 },
        { option: "8", type: "straight", payout: 35 },
        { option: "9", type: "straight", payout: 35 },
        { option: "10", type: "straight", payout: 35 },
        { option: "11", type: "straight", payout: 35 },
        { option: "12", type: "straight", payout: 35 },
        { option: "13", type: "straight", payout: 35 },
        { option: "14", type: "straight", payout: 35 },
        { option: "15", type: "straight", payout: 35 },
        { option: "16", type: "straight", payout: 35 },
        { option: "17", type: "straight", payout: 35 },
        { option: "18", type: "straight", payout: 35 },
        { option: "19", type: "straight", payout: 35 },
        { option: "20", type: "straight", payout: 35 },
        { option: "21", type: "straight", payout: 35 },
        { option: "22", type: "straight", payout: 35 },
        { option: "23", type: "straight", payout: 35 },
        { option: "24", type: "straight", payout: 35 },
        { option: "25", type: "straight", payout: 35 },
        { option: "26", type: "straight", payout: 35 },
        { option: "27", type: "straight", payout: 35 },
        { option: "28", type: "straight", payout: 35 },
        { option: "29", type: "straight", payout: 35 },
        { option: "30", type: "straight", payout: 35 },
        { option: "31", type: "straight", payout: 35 },
        { option: "32", type: "straight", payout: 35 },
        { option: "33", type: "straight", payout: 35 },
        { option: "34", type: "straight", payout: 35 },
        { option: "35", type: "straight", payout: 35 },
        { option: "36", type: "straight", payout: 35 },
        { option: "0", type: "straight", payout: 35 },
        { option: "1-12", type: "column", payout: 2 },
        { option: "13-24", type: "column", payout: 2 },
        { option: "25-36", type: "column", payout: 2 },
        { option: "1-18", type: "column", payout: 2 },
        { option: "19-36", type: "column", payout: 2 },
        { option: "1st 12", type: "column", payout: 2 },
        { option: "2nd 12", type: "column", payout: 2 },
        { option: "3rd 12", type: "column", payout: 2 },
        { option: "Odd", type: "even-odd", payout: 1 },
        { option: "Even", type: "even-odd", payout: 1 },
        { option: "Red", type: "color", payout: 1 },
        { option: "Black", type: "color", payout: 1 },
      ];

function BettingComponent() {
  const placeBet = (option) => {
    console.log(`Placing bet on ${option.option} with a payout of ${option.payout}`);
    // logic to handle placing bets
  };

  return (
    <div>
      <RouletteWheel />
      <BettingGrid />
      <div className="betting-options">
        {bettingOptions.map((option, index) => (
          <div key={index} className="betting-option" onClick={() => placeBet(option)}>
            {option.option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BettingComponent;