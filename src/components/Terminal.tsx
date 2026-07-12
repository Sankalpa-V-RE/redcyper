import { useState, useEffect, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { executeCommand } from '../utils/commands';
import type { CommandResult } from '../utils/commands';
import { getDirectory } from '../utils/fileSystemAPI';

interface HistoryEntry {
  type: 'input' | 'output';
  content: string;
  path?: string; // for input prompts
}

export default function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: 'output', content: 'Ecorp Terminal v2.1.4' },
    { type: 'output', content: 'Type "help" for a list of available commands.' }
  ]);
  const [currentPath, setCurrentPath] = useState<string>('/root/fsociety');
  const [input, setInput] = useState<string>('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isHardGlitching, setIsHardGlitching] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [history]);

  // Keep focus on input when clicking anywhere in terminal
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const triggerGlitch = (duration = 300) => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), duration);
  };

  const triggerHardGlitch = (duration = 400) => {
    setIsHardGlitching(true);
    setTimeout(() => setIsHardGlitching(false), duration);
  };

  // Random periodic glitch
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const rand = Math.random();
      if (rand > 0.95) {
        // 5% chance every 2.5 seconds for a hard glitch
        triggerHardGlitch(Math.random() * 300 + 200);
      } else if (rand > 0.85) {
        // 10% chance for a subtle glitch
        triggerGlitch(Math.random() * 200 + 100);
      }
    }, 2500);
    return () => clearInterval(glitchInterval);
  }, []);

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) {
      setHistory(prev => [...prev, { type: 'input', content: '', path: currentPath }]);
      return;
    }

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    setHistory(prev => [...prev, { type: 'input', content: cmd, path: currentPath }]);

    const result: CommandResult = executeCommand(cmd, currentPath);

    if (result.clear) {
      setHistory([]);
    } else {
      if (result.output) {
        setHistory(prev => [
          ...prev,
          ...result.output!.map(line => ({ type: 'output' as const, content: line }))
        ]);
      }
    }

    if (result.newPath) {
      setCurrentPath(result.newPath);
    }

    // Trigger glitch on specific sensitive files or commands
    if (cmd.includes('wtp_incident_1993.enc') || cmd.includes('f_society_dat.sh') || cmd.includes('sudo')) {
      triggerGlitch(500);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab completion (last word)
      const parts = input.split(' ');
      const lastPart = parts[parts.length - 1];
      if (lastPart) {
        const dir = getDirectory(currentPath);
        if (dir) {
          const matches = Object.keys(dir.children).filter(name => name.startsWith(lastPart));
          if (matches.length === 1) {
            parts[parts.length - 1] = matches[0];
            setInput(parts.join(' '));
          } else if (matches.length > 1) {
            setHistory(prev => [
              ...prev,
              { type: 'input', content: input, path: currentPath },
              { type: 'output', content: matches.join('  ') }
            ]);
          }
        }
      }
    }
  };

  const promptString = `root@10.0.2.14:${currentPath}#`;

  return (
    <div 
      ref={containerRef}
      className={`w-full h-full p-2 sm:p-4 overflow-y-auto font-mono text-sm sm:text-base leading-relaxed ${isHardGlitching ? 'hard-glitch-effect' : isGlitching ? 'glitch-effect' : ''}`}
      onClick={handleContainerClick}
    >
      <div className="output-container">
        {history.map((entry, i) => (
          <div key={i} className="mb-1 whitespace-pre-wrap">
            {entry.type === 'input' ? (
              <span className="opacity-90">
                <span className="text-green-600 mr-2">{`root@10.0.2.14:${entry.path}#`}</span>
                {entry.content}
              </span>
            ) : (
              <span className="text-green-400 opacity-80">{entry.content}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center mt-1">
        <span className="text-green-600 mr-2 whitespace-nowrap">{promptString}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-green-500 shadow-none focus:ring-0 p-0"
          style={{ color: 'var(--term-color)', caretColor: 'var(--term-color)', backgroundColor: 'transparent' }}
          autoFocus
          spellCheck={false}
          autoComplete="off"
        />
      </div>
      <div ref={bottomRef} className="h-4" />
    </div>
  );
}
