function LegendPopup() {
  const payoutTable = {
    cubes: { image: "/assets/9s.png", payout: 3 },
    cloverleaf: { image: "/assets/10s.png", payout: 3 },
    romb: { image: "/assets/8s.png", payout: 3 },
    lemon: { image: "/assets/7s.png", payout: 5 },
    star: { image: "/assets/3s.png", payout: 5 },
    cards: { image: "/assets/6s.png", payout: 5 },
    diamond: { image: "/assets/4s.png", payout: 15 },
    coin: { image: "/assets/11s.png", payout: 10 },
    bell: { image: "/assets/5s.png", payout: 10 },
    seven: { image: "/assets/1s.png", payout: 50 },
    special: { image: "/assets/2s.png", payout: 40 },
  };

  return (
    <div className="legend-popup">
      <h3>Payout Table</h3>
      {Object.entries(payoutTable).map(([symbol, data]) => (
        <div className="legend-item" key={symbol}>
          <img src={data.image} alt={`${symbol} symbol`} />
          <span>
            {symbol}: {data.payout}
          </span>
        </div>
      ))}
    </div>
  );
}

export default LegendPopup;
