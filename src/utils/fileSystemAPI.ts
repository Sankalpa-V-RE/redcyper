import { fileSystem } from '../data/filesystem';
import type { FileSystemNode, DirectoryData, FileData } from '../data/filesystem';

export function resolvePath(currentPath: string, targetPath: string): string {
  if (targetPath === '/') return '/';
  if (targetPath.startsWith('/')) {
    return normalizePath(targetPath);
  }
  return normalizePath(`${currentPath}/${targetPath}`);
}

export function normalizePath(path: string): string {
  const parts = path.split('/').filter(p => p !== '');
  const normalized: string[] = [];
  for (const part of parts) {
    if (part === '.') continue;
    if (part === '..') {
      normalized.pop();
    } else {
      normalized.push(part);
    }
  }
  return '/' + normalized.join('/');
}

export function getNodeAtPath(path: string): FileSystemNode | null {
  const normalizedPath = normalizePath(path);
  if (normalizedPath === '/') return fileSystem;

  const parts = normalizedPath.split('/').filter(p => p !== '');
  let current: FileSystemNode = fileSystem;

  for (const part of parts) {
    if (current.type !== 'dir') return null;
    const next: FileSystemNode | undefined = current.children[part];
    if (!next) return null;
    current = next;
  }
  return current;
}

export function getDirectory(path: string): DirectoryData | null {
  const node = getNodeAtPath(path);
  return node?.type === 'dir' ? node : null;
}

export function getFile(path: string): FileData | null {
  const node = getNodeAtPath(path);
  return node?.type === 'file' ? node : null;
}
