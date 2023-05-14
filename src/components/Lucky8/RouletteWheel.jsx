import React, { useRef, useState } from 'react';
import wheelBackgroundImage from '../assets/wheelsp1.png';
import ballImage from '../assets/ball.png';
import styles from './RWheel.module.css';

const RouletteWheel = () => {
  const [wheelSpinning, setWheelSpinning] = useState(false);
  const [ballSpinning, setBallSpinning] = useState(false);
  const wheelRef = useRef(null);
  const ballRef = useRef(null);
  const randomNumber = useRef(0);
  const animationDuration = useRef(5);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 37);
  };

  const calculateRotationAngles = (randomNumber) => {
    const wheelRotationAngle = 360 * (Math.floor(Math.random() * 8) + 8) + (360 / 37) * randomNumber;
    const ballRotationAngle = 360 * (Math.floor(Math.random() * 8) + 8) + (360 / 37) * (37 - randomNumber);

    return { wheelRotationAngle, ballRotationAngle };
  };

  const startSpinning = () => {
    randomNumber.current = getRandomNumber();
    const { wheelRotationAngle, ballRotationAngle } = calculateRotationAngles(randomNumber.current);
    console.log('Random number:', randomNumber.current);

    wheelRef.current.style.setProperty('--rotation-angle', wheelRotationAngle);
    ballRef.current.style.setProperty('--rotation-angle', ballRotationAngle);

    setWheelSpinning(true);
    setBallSpinning(true);

    setTimeout(() => {
      setWheelSpinning(false);
      setBallSpinning(false);
    }, animationDuration.current * 1000);
  };

  const handleWheelAnimationIteration = () => {
    // control when the wheel should stop spinning
    if (/* wheel should stop */) {
      setWheelSpinning(false);
    }
  };

  const handleBallAnimationIteration = () => {
    // control when the ball should stop spinning
    if (/* ball should stop */) {
      setBallSpinning(false);
    }
  };

  React.useEffect(() => {
    if (wheelRef.current && ballRef.current) {
      wheelRef.current.addEventListener('animationiteration', handleWheelAnimationIteration);
      ballRef.current.addEventListener('animationiteration', handleBallAnimationIteration);
    }
    return () => {
      if (wheelRef.current && ballRef.current) {
        wheelRef.current.removeEventListener('animationiteration', handleWheelAnimationIteration);
        ballRef.current.removeEventListener('animationiteration', handleBallAnimationIteration);
      }
    };
  }, []);

  return (
    <div>
      <button onClick={startSpinning}>Spin</button>
      <div
        className="wheel"
        style={{ animation: wheelSpinning ? 'wheelAnimation 5s linear infinite' : 'none' }}
        ref={wheelRef}
      >
        <div
          className="ball"
          style={{ animation: ballSpinning ? 'ballAnimation 5s linear infinite' : 'none' }}
          ref={ballRef}
        ></div>
      </div>
    </div>
  );
};

export default RouletteWheel;


<style scoped>

</style>
