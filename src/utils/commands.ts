import { getDirectory, getFile, resolvePath } from './fileSystemAPI';

export interface CommandContext {
  args: string[];
  currentPath: string;
}

export interface CommandResult {
  output?: string[];
  newPath?: string;
  clear?: boolean;
}

export type CommandHandler = (context: CommandContext) => CommandResult;

const commands: Record<string, CommandHandler> = {
  help: () => ({
    output: [
      'Available commands:',
      '  ls [-a] [-l] [dir] - List directory contents',
      '  cd <dir>           - Change current directory',
      '  cat <file>         - Concatenate files and print on the standard output',
      '  pwd                - Print name of current/working directory',
      '  clear              - Clear the terminal screen',
      '  help               - Display this help message',
      '  whoami             - Print effective userid',
      '  date               - Print the system date and time',
      '  tree               - List contents of directories in a tree-like format',
      '  find <term>        - Search for files by name',
      '  grep <term> <file> - Print lines matching a pattern',
      '  sysinfo            - Print system information',
      '  man <command>      - An interface to the system reference manuals'
    ]
  }),

  pwd: ({ currentPath }) => ({ output: [currentPath] }),

  clear: () => ({ clear: true }),

  whoami: () => ({ output: ['root'] }),

  date: () => ({ output: [new Date().toString()] }),

  ls: ({ args, currentPath }) => {
    let showAll = false;
    let showLong = false;
    let targetPath = currentPath;

    for (const arg of args) {
      if (arg === '-a') showAll = true;
      else if (arg === '-l') showLong = true;
      else if (arg === '-al' || arg === '-la') {
        showAll = true;
        showLong = true;
      } else if (!arg.startsWith('-')) {
        targetPath = resolvePath(currentPath, arg);
      }
    }

    const dir = getDirectory(targetPath);
    if (!dir) {
      const file = getFile(targetPath);
      if (file) {
        return { output: [file.name] };
      }
      return { output: [`ls: cannot access '${targetPath}': No such file or directory`] };
    }

    const output: string[] = [];
    const entries = Object.values(dir.children);
    
    if (showAll) {
      entries.unshift(
        { type: 'dir', name: '.', children: {}, permissions: 'drwxr-xr-x' },
        { type: 'dir', name: '..', children: {}, permissions: 'drwxr-xr-x' }
      );
    }

    const filtered = showAll ? entries : entries.filter(e => !e.name.startsWith('.'));

    if (showLong) {
      for (const entry of filtered) {
        const perms = entry.permissions || (entry.type === 'dir' ? 'drwxr-xr-x' : '-rw-r--r--');
        const size = entry.type === 'dir' ? '4096' : (entry as any).content?.length.toString() || '0';
        const date = 'Sep 15 03:00'; // Fake date for realism
        output.push(`${perms} 1 root root ${size.padStart(6)} ${date} ${entry.name}`);
      }
    } else {
      // Just names, separated by spaces or newlines. Let's do newlines for simplicity in standard output
      output.push(filtered.map(e => e.name).join('  '));
    }

    return { output };
  },

  cd: ({ args, currentPath }) => {
    if (args.length === 0) {
      return { newPath: '/home/user' };
    }
    const target = args[0];
    if (target === '~') return { newPath: '/home/user' };
    
    const newPath = resolvePath(currentPath, target);
    const dir = getDirectory(newPath);
    if (!dir) {
      return { output: [`cd: ${target}: No such file or directory`] };
    }
    return { newPath };
  },

  cat: ({ args, currentPath }) => {
    if (args.length === 0) {
      return { output: ['cat: missing operand'] };
    }
    const targetPath = resolvePath(currentPath, args[0]);
    const file = getFile(targetPath);
    const dir = getDirectory(targetPath);
    
    if (dir) {
      return { output: [`cat: ${args[0]}: Is a directory`] };
    }
    if (!file) {
      return { output: [`cat: ${args[0]}: No such file or directory`] };
    }

    if (file.name.endsWith('.enc')) {
      // Small easter egg for encrypted files
      return { output: [file.content] };
    }

    return { output: file.content.split('\n') };
  },

  tree: ({ args, currentPath }) => {
    const target = args.length > 0 ? resolvePath(currentPath, args[0]) : currentPath;
    const dir = getDirectory(target);
    if (!dir) return { output: [`tree: ${args[0] || currentPath}: No such directory`] };

    const output: string[] = [target];
    
    const traverse = (node: any, prefix: string) => {
      const keys = Object.keys(node.children);
      keys.forEach((key, index) => {
        const child = node.children[key];
        const isLast = index === keys.length - 1;
        const connector = isLast ? '└── ' : '├── ';
        output.push(`${prefix}${connector}${child.name}`);
        if (child.type === 'dir') {
          traverse(child, prefix + (isLast ? '    ' : '│   '));
        }
      });
    };

    traverse(dir, '');
    return { output };
  },

  find: ({ args, currentPath }) => {
    if (args.length === 0) return { output: ['find: missing operand'] };
    const term = args[0].toLowerCase();
    const output: string[] = [];

    const traverse = (node: any, path: string) => {
      const keys = Object.keys(node.children || {});
      for (const key of keys) {
        const child = node.children[key];
        const childPath = path === '/' ? `/${child.name}` : `${path}/${child.name}`;
        if (child.name.toLowerCase().includes(term)) {
          output.push(childPath);
        }
        if (child.type === 'dir') {
          traverse(child, childPath);
        }
      }
    };

    const startDir = getDirectory(currentPath);
    if (startDir) traverse(startDir, currentPath);

    return { output: output.length > 0 ? output : [] }; // return empty if none found
  },

  grep: ({ args, currentPath }) => {
    if (args.length < 2) return { output: ['Usage: grep <pattern> <file>'] };
    const pattern = args[0];
    const targetPath = resolvePath(currentPath, args[1]);
    const file = getFile(targetPath);

    if (!file) return { output: [`grep: ${args[1]}: No such file or directory`] };

    const lines = file.content.split('\n');
    const matched = lines.filter(line => line.includes(pattern));
    
    // Simple highlighting by wrapping matched text in HTML/CSS wouldn't work with pure text output array,
    // so we just return the lines.
    return { output: matched };
  },

  sysinfo: () => {
    return {
      output: [
        '   _____                     ',
        '  |  ___|                    ',
        '  | |__  ___ ___  _ __ _ __  ',
        '  |  __|/ __/ _ \\| \'__| \'_ \\ ',
        '  | |__| (_| (_) | |  | |_) |',
        '  \\____/\\___\\___/|_|  | .__/ ',
        '                      | |    ',
        '                      |_|    ',
        '',
        'OS: EcorpOS v9.4 (Paranoid Edition)',
        'Kernel: 5.15.0-ecorp-secure',
        'Uptime: 42 days, 15 hours, 23 mins',
        'Shell: bash',
        'CPU: Quantum Core processor @ 4.20GHz',
        'RAM: 128TB',
        'Status: UNREGISTERED / BREACHED'
      ]
    };
  },
  
  neofetch: (context) => commands.sysinfo(context),

  man: ({ args }) => {
    if (args.length === 0) return { output: ['What manual page do you want?'] };
    const cmd = args[0];
    if (commands[cmd]) {
      return { output: [`No manual entry for ${cmd}. But you can use 'help' to see what it does.`] };
    }
    return { output: [`No manual entry for ${cmd}`] };
  },

  sudo: ({ args }) => {
    if (args.length > 0 && args[0] === 'rm' && args[1] === '-rf' && args[2] === '/') {
      return { output: ['Nice try. But the system is already compromised.'] };
    }
    return { output: ['sudo: user is not in the sudoers file. This incident will be reported.'] };
  }
};

// Aliases and easter eggs
commands['hack'] = ({ args }) => {
  if (args.join(' ') === 'the planet') {
    return { output: ['HACK THE PLANET!'] };
  }
  return { output: ['hack: command not found'] };
};

export function executeCommand(commandStr: string, currentPath: string): CommandResult {
  const parts = commandStr.trim().split(/\s+/);
  const cmd = parts[0];
  const args = parts.slice(1);

  if (!cmd) return {};

  const handler = commands[cmd];
  if (handler) {
    try {
      return handler({ args, currentPath });
    } catch (e: any) {
      return { output: [`Error executing ${cmd}: ${e.message}`] };
    }
  }

  return { output: [`bash: ${cmd}: command not found. Type 'help' for a list of commands.`] };
}
