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
    root: {
      type: 'dir',
      name: 'root',
      permissions: 'drwx------',
      children: {
        fsociety: {
          type: 'dir',
          name: 'fsociety',
          permissions: 'drwxr-xr-x',
          children: {
            'manifesto.txt': {
              type: 'file',
              name: 'manifesto.txt',
              permissions: '-rw-r--r--',
              content: "We are fsociety.\n\nWe are finally awake. We are finally alive.\n\nWhat I'm about to tell you is top secret, a conspiracy bigger than all of us.\nThere's a powerful group of people out there that are secretly running the world.\nI'm talking about the guys no one knows about, the guys that are invisible.\nThe top 1% of the top 1%, the guys that play God without permission.\n\nAnd now I think they are following me."
            },
            recon: {
              type: 'dir',
              name: 'recon',
              permissions: 'drwxr-xr-x',
              children: {
                'ecorp_nmap_scan.log': {
                  type: 'file',
                  name: 'ecorp_nmap_scan.log',
                  permissions: '-rw-r--r--',
                  content: "Starting Nmap 7.92 ( https://nmap.org ) at 2026-10-23 01:14 EDT\nNmap scan report for ecorp.com (104.21.75.54)\nHost is up (0.012s latency).\nNot shown: 996 filtered tcp ports (no-response)\nPORT     STATE  SERVICE\n22/tcp   open   ssh\n80/tcp   open   http\n443/tcp  open   https\n8080/tcp open   http-proxy\n\nNmap done: 1 IP address (1 host up) scanned in 4.52 seconds"
                },
                'steel_mountain_notes.txt': {
                  type: 'file',
                  name: 'steel_mountain_notes.txt',
                  permissions: '-rw-r--r--',
                  content: "Facility: Steel Mountain\nLocation: Adirondack Mountains, New York\nTarget: Level 1 Climate Control System\n\nNotes:\n- Tape backups are stored in Level 1.\n- Security relies on proximity badges. RFID cloning required.\n- The climate control system regulates the temperature of the tape storage.\n- If we raise the heat to 95 degrees Fahrenheit, the magnetic tape will be destroyed.\n- Need a Raspberry Pi to hook into the HVAC network. Pi needs to be planted behind the thermostat in the Level 1 bathroom."
                },
                'exec_targets.csv': {
                  type: 'file',
                  name: 'exec_targets.csv',
                  permissions: '-rw-r--r--',
                  content: "Name,Title,Clearance,Status\nPhillip Price,CEO,Level 6,Active\nTyrell Wellick,SVP Technology,Level 5,Unknown\nTerry Colby,CTO,Level 5,Compromised\nScott Knowles,CTO,Level 5,Active"
                }
              }
            },
            archives: {
              type: 'dir',
              name: 'archives',
              permissions: 'drwxr-xr-x',
              children: {
                'wtp_incident_1993.enc': {
                  type: 'file',
                  name: 'wtp_incident_1993.enc',
                  permissions: '-r--------',
                  content: "U2FsdGVkX1+vGz7/Q2a9e2/wXQ1... [ACCESS DENIED: INVALID KEY]\n\nERROR: Washington Township toxic waste leak investigation files are encrypted."
                }
              }
            },
            payloads: {
              type: 'dir',
              name: 'payloads',
              permissions: 'drwxr-xr-x',
              children: {
                'f_society_dat.sh': {
                  type: 'file',
                  name: 'f_society_dat.sh',
                  permissions: '-rwxr-xr-x',
                  content: "#!/bin/bash\n\n# fsociety rootkit deployment script\n# Target: Ecorp distributed backup servers\n\necho \"Initiating f_society payload...\"\n\n# Disable logging\nrm -rf /var/log/syslog\nrm -rf /var/log/auth.log\n\n# Encrypt all records\nfind / -type f -name \"*.dat\" -exec openssl enc -aes-256-cbc -salt -in {} -out {}.enc -pass pass:fs0ci3ty \\;\n\n# Overwrite original files\nfind / -type f -name \"*.dat\" -exec shred -u {} \\;\n\necho \"Encryption complete. We are finally awake.\""
                }
              }
            }
          }
        }
      }
    }
  }
};
