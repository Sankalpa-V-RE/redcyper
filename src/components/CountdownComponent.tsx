import { useState, useEffect } from 'react';

export default function CountdownComponent() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    // Target date: 12 September 2026 00:00:00
    const targetDate = new Date('2026-09-12T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsPast(true);
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-4 text-green-400 font-mono">
      <div>========================================</div>
      <div>        RELAUNCH OPERATION</div>
      <div>========================================</div>
      <br />
      {isPast ? (
        <>
          <div>STATUS: <span className="text-red-500 animate-pulse">ACTIVE</span></div>
          <br />
          <div>========================================</div>
          <div>       OPERATION WINDOW OPEN</div>
          <div>========================================</div>
          <br />
          <div>PHASE ONE IS ACTIVE.</div>
        </>
      ) : (
        <>
          <div>STATUS: <span className="text-red-500">ARMED</span></div>
          <br />
          <div>NEXT WINDOW</div>
          <br />
          <div>
            {timeLeft ? (
              <span className="text-white text-lg tracking-widest">
                {String(timeLeft.days).padStart(3, '0')} DAYS  {String(timeLeft.hours).padStart(2, '0')} HOURS  {String(timeLeft.minutes).padStart(2, '0')} MINUTES  {String(timeLeft.seconds).padStart(2, '0')} SECONDS
              </span>
            ) : (
              <span>CALCULATING...</span>
            )}
          </div>
        </>
      )}
      <br />
      <div>========================================</div>
    </div>
  );
}
