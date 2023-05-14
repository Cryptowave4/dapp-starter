import React, { useState } from "react";
import Topbar from "../src/components/Etherslots/Topbar";
import LegendPopup from "../src/components/Etherslots/LegendPopup";
import BottomBar from "../src/components/Etherslots/Bottombar";
import WinPopup from "../src/components/Etherslots/WinPopup";

const EtherslotsGame = () => {
  const [userTokenCount, setUserTokenCount] = useState(5000);
  const [reels, setReels] = useState(Array(5).fill(Array(3).fill("")));
  const [winningLines, setWinningLines] = useState(Array(8).fill(""));
  const [showWinPopup, setShowWinPopup] = useState(false);
  const [totalWinnings, setTotalWinnings] = useState(0);

  const handleStart = (betAmount, isAutomatic) => {
    const VISIBLE_SLOTS = 3;

    const getRandomIndexFromProbabilities = (probabilities) => {
      const randomNum = Math.random();
      let cumulativeProb = 0;
      for (let i = 0; i < probabilities.length; i++) {
        cumulativeProb += probabilities[i];
        if (randomNum <= cumulativeProb) {
          return i;
        }
      }
      return probabilities.length - 1;
    };

    const getRandomSymbol = (payoutTable) => {
      const symbols = Object.keys(payoutTable);
      const probabilities = symbols.map(
        (symbol) => payoutTable[symbol].probability
      );
      const symbolIndex = getRandomIndexFromProbabilities(probabilities);
      return symbols[symbolIndex];
    };

    const spinReel = (payoutTable) => {
      return new Promise((resolve) => {
        const reelLength = VISIBLE_SLOTS;
        const spinTime = 4000; // Change this value to adjust spin time

        let currentIndex = 0;
        const spinReel = () => {
          currentIndex = (currentIndex + 1) % reelLength;
          const symbol = getRandomSymbol(payoutTable);
          displayReel(symbol);

          if (currentIndex === reelLength - 1) {
            // Reel has completed one full spin
            resolve(symbol);
          } else {
            // Set a timer to spin the reel again
            setTimeout(spinReel, spinTime / reelLength);
          }
        };

        // Start spinning the reel
        spinReel();
      });
    };

    const startGameSound = new Audio("/assets/start.mp3");
    const winPayoutSound = new Audio("/assets/win1.mp3");
    const jackpotSound = new Audio("/assets/jackpot_win.mp3");

    const isJackpot = (line) => {
      const rarestSymbol = "seven";
      return line.every((symbol) => symbol === rarestSymbol);
    };

    if (betAmount <= 0) {
      console.error("Bet amount must be greater than 0.");
      return;
    }
    if (betAmount > userTokenCount) {
      console.error("Insufficient funds.");
      return;
    }

    const calculatePayout = (betAmount, payoutTable, payoutLines) => {
      let totalPayout = 0;
      // Loop through each payout line
      for (const line of payoutLines) {
        const counts = line.reduce((acc, symbol) => {
          acc[symbol] = (acc[symbol] || 0) + 1;
          return acc;
        }, {});

        let payout = 0;
        for (const symbol in counts) {
          const count = counts[symbol];
          if (count >= 3

								let payout = 0;
								for (const symbol in counts) {
									const count = counts[symbol];
									if (count >= 3) {
										let multiplier;
										if (count === 3) {
											multiplier = 1;
										} else if (count === 4) {
											multiplier = 2;
										} else if (count === 5) {
											multiplier = 3;
										} else {
											multiplier = 0; // set a default value
										}

										// Calculate payout for this symbol on this line
										payout += betAmount * payoutTable[symbol].payout * multiplier;
									}
								}

								// Add the payout for this line to the total payout
								totalPayout += payout;
							}

							return totalPayout;
						};

						let spinsLeft = isAutomatic ? 10 : 1;
						while (spinsLeft > 0) {
							// ... (game logic and generate payoutLines based on the game's rules and outcome)

							const getRandomSymbol = (payoutTable) => {
								const symbols = [
									newReels.map((reel) => reel[0]), // Top row
									newReels.map((reel) => reel[1]), // Middle row
									newReels.map((reel) => reel[VISIBLE_SLOTS - 1]), // Bottom row
									[newReels[0][0], newReels[1][1], newReels[2][2], newReels[3][3], newReels[4][4]], // Diagonal top-left to bottom-right
									[
										newReels[0][VISIBLE_SLOTS - 1],
										newReels[1][VISIBLE_SLOTS - 2],
										newReels[2][VISIBLE_SLOTS - 3],
										newReels[3][VISIBLE_SLOTS - 2],
										newReels[4][VISIBLE_SLOTS - 1]
									], // Diagonal bottom-left to top-right
									[newReels[0][0], newReels[1][0], newReels[2][1], newReels[3][2], newReels[4][3]], // V-shape starting from top-left
									[
										newReels[0][VISIBLE_SLOTS - 1],
										newReels[1][VISIBLE_SLOTS - 1],
										newReels[2][VISIBLE_SLOTS - 2],
										newReels[3][VISIBLE_SLOTS - 3],
										newReels[4][VISIBLE_SLOTS - 4]
									], // V-shape starting from top-right
									[
										newReels[0][VISIBLE_SLOTS - 4],
										newReels[1][VISIBLE_SLOTS - 3],
										newReels[2][VISIBLE_SLOTS - 2],
										newReels[3][VISIBLE_SLOTS - 1],
										newReels[4][VISIBLE_SLOTS - 1]
									] /* V-shape starting from bottom-left*/
									/* payout lines here*/
								];
							}

							const lineColors = [
								"#FF5733",
								"#33FF57",
								"#FF33A8",
								"#FFFC33",
								"#338AFF",
								"#8A33FF",
								"#33FFFC",
								"#FF8A33"
							];

							const highlightWinningLines = (winningLines) => {
								winningLines.forEach((lineIndex) => {
									this.$set(this.winningLines, lineIndex, lineColors[lineIndex]);
								});
								setTimeout(() => {
									this.winningLines = Array(8).fill("");
								}, 7000);
							}
						}
					}
export default function EtherslotsGame() {

