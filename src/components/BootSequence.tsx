import { useState, useEffect } from 'react';

const BOOT_LINES = [
  'Ecorp BIOS v4.20.69 Copyright (C) 1999-2026',
  'Main Processor: Quantum Core(tm) @ 4.20GHz',
  'Memory Testing: 131072M OK',
  'Detecting IDE Primary Master... [Found: Ecorp Secure Drive]',
  'Detecting IDE Primary Slave...  [None]',
  'Booting from Primary Master...',
  'Loading Kernel...',
  'Mounting root filesystem... [OK]',
  'Checking encrypted partitions... [WARNING: INTEGRITY COMPROMISED]',
  'Initializing network interfaces... [OK]',
  'Starting Ecorp SecMon daemon... [FAILED]',
  'Starting sshd... [OK]',
  'Entering runlevel 3...',
  '',
  'ecorp-main login: sysadmin',
  'Password: **************',
  'Login successful.',
  'Welcome to EcorpOS. All actions are monitored.',
  ''
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = () => {
      onComplete();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  useEffect(() => {
    if (currentIndex < BOOT_LINES.length) {
      // Simulate fast output for some lines, slow for others (like password)
      let delay = Math.random() * 50 + 20; 
      if (BOOT_LINES[currentIndex].startsWith('Password:')) {
        delay = 800; // Pause at password
      } else if (BOOT_LINES[currentIndex].startsWith('Loading Kernel')) {
        delay = 400; // Pause at kernel
      }

      const timer = setTimeout(() => {
        setLines(prev => [...prev, BOOT_LINES[currentIndex]]);
        setCurrentIndex(c => c + 1);
      }, delay);
      
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(finishTimer);
    }
  }, [currentIndex, onComplete]);

  return (
    <div className="w-full h-full p-4 overflow-hidden text-green-500 font-mono text-sm sm:text-base leading-relaxed opacity-90">
      <div className="mb-4 text-xs opacity-50">Press any key to skip</div>
      {lines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      {currentIndex < BOOT_LINES.length && <span className="animate-pulse">_</span>}
    </div>
  );
}
