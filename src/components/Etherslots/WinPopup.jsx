// components/WinPopup.js
import { Transition } from 'react-transition-group'

export default function WinPopup({ isShown = false, totalWin = 0 }) {
  return (
    <Transition in={isShown} timeout={300} unmountOnExit>
      {state => (
        <div className={`win-popup fade-${state}`}>
          <p>Total Win: {totalWin}</p>
        </div>
      )}
    </Transition>
  )
}

export { WinPopup }

