export interface FileData {
  type: 'file';
  name: string;
  content: string;
  permissions?: string;
}

export interface DirectoryData {
  type: 'dir';
  name: string;
  children: Record<string, FileData | DirectoryData>;
  permissions?: string;
}

export type FileSystemNode = FileData | DirectoryData;

export const fileSystem: DirectoryData = {
  type: 'dir',
  name: '/',
  permissions: 'drwxr-xr-x',
  children: {
    home: {
      type: 'dir',
      name: 'home',
      permissions: 'drwxr-xr-x',
      children: {
        user: {
          type: 'dir',
          name: 'user',
          permissions: 'drwxr-xr-x',
          children: {
            notes: {
              type: 'dir',
              name: 'notes',
              permissions: 'drwxr-xr-x',
              children: {
                'journal_01.txt': {
                  type: 'file',
                  name: 'journal_01.txt',
                  permissions: '-rw-r--r--',
                  content: "Day 42.\n\nI think they're monitoring the VPN now. I noticed latency spikes at exactly 0300 every night. They only do that when they're mirroring traffic to the secure facility.\n\nI need to be careful. Ecorp has eyes everywhere."
                },
                'journal_02.txt': {
                  type: 'file',
                  name: 'journal_02.txt',
                  permissions: '-rw-r--r--',
                  content: "Day 45.\n\nFound the backdoor in the latest firmware update. It's elegantly hidden. Not a bug, a feature. It beacons to an IP block owned by Ecorp's shadow subsidiary.\n\nIf I leak this, my life is over. But if I don't, millions of people are exposed."
                },
                'targets.txt': {
                  type: 'file',
                  name: 'targets.txt',
                  permissions: '-rw-r--r--',
                  content: "Primary: Project Washington Phase 2\nSecondary: Data Centers 4 through 9\nTertiary: Ecorp Executive Communications Node"
                }
              }
            },
            '.bash_history': {
              type: 'file',
              name: '.bash_history',
              permissions: '-rw-------',
              content: "cd /var/log\ngrep -i 'auth' syslog\nssh root@10.0.2.15\ncd /mnt/leaked_docs\ncat executive_emails.txt\nrm -rf /var/log/auth.log\nexit"
            }
          }
        }
      }
    },
    var: {
      type: 'dir',
      name: 'var',
      permissions: 'drwxr-xr-x',
      children: {
        log: {
          type: 'dir',
          name: 'log',
          permissions: 'drwxr-xr-x',
          children: {
            'auth.log': {
              type: 'file',
              name: 'auth.log',
              permissions: '-rw-r-----',
              content: "Sep 15 02:41:12 ecorp-main sshd[15234]: Accepted publickey for root from 192.168.1.104\nSep 15 02:45:00 ecorp-main sudo: root : TTY=pts/0 ; PWD=/root ; USER=root ; COMMAND=/bin/bash\nSep 15 03:00:12 ecorp-main sshd[15234]: Received disconnect from 192.168.1.104"
            },
            'server_access.log': {
              type: 'file',
              name: 'server_access.log',
              permissions: '-rw-r-----',
              content: "10.0.5.11 - - [14/Sep/2026:23:15:02 +0000] \"GET /api/v1/auth HTTP/1.1\" 403\n10.0.5.11 - - [14/Sep/2026:23:15:03 +0000] \"POST /api/v1/auth/bypass HTTP/1.1\" 200\n10.0.5.11 - - [14/Sep/2026:23:16:45 +0000] \"GET /admin/secure_vault HTTP/1.1\" 200"
            }
          }
        }
      }
    },
    mnt: {
      type: 'dir',
      name: 'mnt',
      permissions: 'drwxr-xr-x',
      children: {
        leaked_docs: {
          type: 'dir',
          name: 'leaked_docs',
          permissions: 'drwxr-xr-x',
          children: {
            ecorp: {
              type: 'dir',
              name: 'ecorp',
              permissions: 'drwxr-xr-x',
              children: {
                'internal_memo_q3.txt': {
                  type: 'file',
                  name: 'internal_memo_q3.txt',
                  permissions: '-rw-r--r--',
                  content: "FROM: Ecorp Board of Directors\nTO: All Regional Managers\nSUBJECT: Containment Strategy\n\nRegarding the recent anomalous data exfiltration events:\nMaintain the narrative that this was a routine system migration error. Under no circumstances should the press be informed of the breach. The PR team is drafting a statement about 'enhanced security upgrades'. Ensure all localized logs are scrubbed according to Protocol 7."
                },
                'executive_emails.txt': {
                  type: 'file',
                  name: 'executive_emails.txt',
                  permissions: '-rw-r--r--',
                  content: "Date: 12-09-2026\nFrom: c.tyrell@ecorp.com\nTo: p.price@ecorp.com\n\nThe Washington Township project is bleeding resources. If we don't handle the leak, the regulatory bodies will shut us down. I have a team ready to 'remediate' the whistleblower.\n\n---\nDate: 12-09-2026\nFrom: p.price@ecorp.com\nTo: c.tyrell@ecorp.com\n\nDo what you must, but keep Ecorp's name out of it. The optics would be disastrous right before the earnings call."
                },
                'financial_irregularities.md': {
                  type: 'file',
                  name: 'financial_irregularities.md',
                  permissions: '-rw-r--r--',
                  content: "# Ecorp Financial Audit - CONFIDENTIAL\n\n- Offshore accounts in the Cayman Islands show unrecorded deposits of $4.2 Billion.\n- Shell company 'Dark Army Logistics' receiving massive undocumented wire transfers.\n- Recommendation: Shred physical copies. Encrypt digital copies. Deny existence."
                },
                'coverup_timeline.txt': {
                  type: 'file',
                  name: 'coverup_timeline.txt',
                  permissions: '-rw-r--r--',
                  content: "2024-05: Toxic leak detected at facility.\n2024-06: Internal scientists confirm leak.\n2024-08: Scientists terminated or paid off. Non-disclosure agreements signed.\n2025-01: Public health issues spike in surrounding town.\n2025-03: Ecorp launches 'Green Earth' PR campaign to deflect.\n2026-07: Someone inside is pulling the thread..."
                },
                'whistleblower_statement.txt': {
                  type: 'file',
                  name: 'whistleblower_statement.txt',
                  permissions: '-rw-r--r--',
                  content: "My name is [REDACTED]. I worked as a Senior Systems Architect at Ecorp for 12 years. I can no longer stay silent. The things they are doing... the data they are harvesting... it's beyond control. They own our debt, our data, and soon, our minds. I have mirrored all the evidence to decentralized nodes. They will hunt me, but the truth is out there."
                },
                'vault_codes.enc': {
                  type: 'file',
                  name: 'vault_codes.enc',
                  permissions: '-r--------',
                  content: "U2FsdGVkX19sB4C6wY8k1bZ+9Vlq...\n\n[ACCESS DENIED: ENCRYPTION KEY REQUIRED]"
                }
              }
            },
            shell_dumps: {
              type: 'dir',
              name: 'shell_dumps',
              permissions: 'drwxr-xr-x',
              children: {
                'db_dump_partial.log': {
                  type: 'file',
                  name: 'db_dump_partial.log',
                  permissions: '-rw-r--r--',
                  content: "INSERT INTO users (id, username, password_hash, clearance_level) VALUES\n(1, 'admin', '098f6bcd4621d373cade4e832627b4f6', 5),\n(2, 'sysop', '5ebe2294ecd0e0f08eab7690d2a6ee69', 4);\n\nERROR 1064 (42000) at line 5: You have an error in your SQL syntax..."
                },
                'network_map.txt': {
                  type: 'file',
                  name: 'network_map.txt',
                  permissions: '-rw-r--r--',
                  content: "10.0.0.0/8 - Internal Ecorp Network\n|-- 10.1.0.0/16 - Data Center Alpha\n|   |-- 10.1.5.0/24 - Secure Storage (Airgapped?)\n|-- 10.2.0.0/16 - R&D Facility (Washington Twp)\n|-- 10.99.0.0/16 - Executive VPN"
                }
              }
            }
          }
        }
      }
    },
    'README.txt': {
      type: 'file',
      name: 'README.txt',
      permissions: '-rw-r--r--',
      content: "Welcome to the Ecorp Internal Document Browser.\n\nWARNING: UNAUTHORIZED ACCESS IS STRICTLY PROHIBITED.\nALL ACTIVITY IS LOGGED AND MONITORED.\n\nUse standard Unix commands (ls, cd, cat, pwd, clear, help) to navigate."
    }
  }
};
