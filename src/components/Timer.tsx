import React, { useEffect, useState } from 'react';
import './Timer.css';

interface TimerProps {
  duration?: number; //optional
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration = 1800, onTimeUp }) => { // Default duration to 1800 seconds (30 minutes)
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);


  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return <div className="timer">Time left: {formatTime(timeLeft)}</div>;
};

export default Timer;
