import { useState, useEffect } from 'react';

const baseFsociety = `
  ___ ___  ___   ___ ___ ___ _______   __
 | __/ __|/ _ \\ / __|_ _| __|_   _\\ \\ / /
 | _|\\__ \\ (_) | (__ | || _|  | |  \\ V / 
 |_| |___/\\___/ \\___|___|___| |_|   |_|  
`;

export default function CorruptedCountdown() {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);
  const [isPast, setIsPast] = useState(false);
  const [corruptChars, setCorruptChars] = useState('███████████');
  const [dynamicLogs, setDynamicLogs] = useState<string[]>([]);

  useEffect(() => {
    const chars = '█▓▒░@#$%&^*!0101';
    const glitchInterval = setInterval(() => {
      // 1. Scramble date chars
      let str = '';
      for (let i = 0; i < 11; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
      }
      setCorruptChars(str);

      // 2. Generate massive dynamic logs
      let newLogs = [];
      const hexChars = '0123456789ABCDEF!@#$%^&*';
      for (let k = 0; k < 150; k++) { // Increased to 150 lines to fill any vertical height
        let logLine = '';
        for (let j = 0; j < 500; j++) { // Increased to 500 chars to reach full screen width
          logLine += hexChars[Math.floor(Math.random() * hexChars.length)];
        }
        newLogs.push(`[SYS_MEM] 0x${logLine.substring(0, 16)} ... OVERRIDE BLOCK ${logLine.substring(16, 490)}`);
      }
      setDynamicLogs(newLogs);
    }, 100);
    return () => clearInterval(glitchInterval);
  }, []);

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

      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-black text-green-500 font-mono text-sm sm:text-base leading-none overflow-hidden relative p-2 sm:p-4">
      
      {/* Foreground Content - Floated left so logs flow around it */}
      <div className="float-left pr-4 sm:pr-8 pb-4 mt-12 sm:mt-16 ml-2 sm:ml-4 relative z-10">
        <div className="mb-8 text-green-400 whitespace-pre text-xs sm:text-sm">
          {baseFsociety}
        </div>
        
        {isPast ? (
          <div className="text-left animate-pulse">
            <div className="mb-4 text-xl sm:text-2xl font-bold tracking-widest text-red-500">[ OPERATION WINDOW OPEN ]</div>
            <div className="text-white text-lg">PHASE ONE IS ACTIVE.</div>
          </div>
        ) : (
          <div className="text-left">
            <div className="mb-6">DATE: <span className="opacity-80 animate-pulse text-white">{corruptChars}</span></div>
            <div className="mb-4 text-green-400">COUNTDOWN TO ATTACK:</div>
            <div className="mb-6 text-2xl sm:text-3xl text-white tracking-[0.2em] flex items-center">
              <span className="opacity-50 mr-2">{corruptChars.substring(0,2)}:{corruptChars.substring(2,4)}:</span>
              {timeLeft ? (
                <span>
                  {String(timeLeft.minutes).padStart(2, '0')}:
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              ) : (
                <span>--:--:--</span>
              )}
            </div>
            <div className="opacity-80 text-green-400">STATUS: COUNTDOWN ACTIVE</div>
          </div>
        )}

        {/* Readable Attack Logs */}
        <div className="mt-8 text-xs sm:text-sm text-green-400 font-mono space-y-1 opacity-90">
          <div>[ * ] INITIATING PHASE ONE OVERRIDE...</div>
          <div>[ * ] BYPASSING FIREWALL DEFENSES...</div>
          <div>[ * ] DECRYPTING PAYLOAD STAGES...</div>
          <div>[ * ] ESTABLISHING SECURE UPLINK...</div>
          <div className="animate-pulse text-white mt-2">[ * ] AWAITING TARGET WINDOW...</div>
        </div>
      </div>

      {/* Background moving logs - Flowing around the floated content */}
      <div className="opacity-30 font-mono text-[10px] sm:text-xs leading-tight overflow-hidden pointer-events-none break-all">
        {dynamicLogs.map((log, i) => (
          <span key={i}>{log}<br /></span>
        ))}
      </div>

    </div>
  );
}
