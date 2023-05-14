import React from 'react';
import styles form './BettingGrid.module.css';
const BettingGrid = () => {
  const numbers = [
    [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
  ];
  const bettingOptions = [
    { option: '1-12', type: 'column', payout: 2, span: 3, row: 13 },
    { option: '13-24', type: 'column', payout: 2, span: 3, row: 14 },
    { option: '25-36', type: 'column', payout: 2, span: 3, row: 15 },
    { option: '1-18', type: 'column', payout: 2, span: 3, row: 16 },
    { option: '19-36', type: 'column', payout: 2, span: 3, row: 17 },
    { option: '1st 12', type: 'column', payout: 2, span: 3, row: 18 },
    { option: '2nd 12', type: 'column', payout: 2, span: 3, row: 19 },
    { option: '3rd 12', type: 'column', payout: 2, span: 3, row: 20 },
    { option: 'Odd', type: 'even-odd', payout: 1, span: 3, row: 21 },
    { option: 'Even', type: 'even-odd', payout: 1, span: 3, row: 22 },
    { option: 'Red', type: 'color', payout: 1, span: 3, row: 23 },
    { option: 'Black', type: 'color', payout: 1, span: 3, row: 24 },
  ];

  return (
    <div className="grid">
      {numbers.map((row, rowIndex) => (
        <div key={rowIndex} className="number-row">
          {row.map((number, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`number ${number === 0 ? 'number-zero' : ''}`}
            >
              {number}
            </div>
          ))}
        </div>
      ))}
      <div className="number number-zero" style={{ gridRow: 'span 3' }}>
        0
      </div>
      {bettingOptions.map((option, index) => (
        <div
          key={index}
          className="betting-option"
          style={{
            gridColumn: `span ${option.span}`,
            gridRow: option.row,
          }}
        >
          {option.option}
        </div>
      ))}
    </div>
  );
};

export default BettingGrid;



