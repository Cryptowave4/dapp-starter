// components/TopBar.js
import { useState } from "react";
import userTokenIcon from "./assets/Coins.png";
import LegendPopup from "./LegendPopup";

export default function TopBar() {
  const [userTokenCount, setUserTokenCount] = useState(0);
  const [legendPopupVisible, setLegendPopupVisible] = useState(false);

  function handleLegendButtonClick() {
    setLegendPopupVisible((visible) => !visible);
  }

  return (
    <div className="top-bar">
      <img src={userTokenIcon} alt="User token icon" />
      <span>{userTokenCount}</span>
      <button className="legend-button" onClick={handleLegendButtonClick}>
        Legend
      </button>
      {legendPopupVisible && (
        <LegendPopup onClickAway={() => setLegendPopupVisible(false)} />
      )}
    </div>
  );
}
export { TopBar };
