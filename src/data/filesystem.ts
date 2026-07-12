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
        mrrobot: {
          type: 'dir',
          name: 'mrrobot',
          permissions: 'drwx------',
          children: {
            '.sys_logs': {
              type: 'dir',
              name: '.sys_logs',
              permissions: 'drwx------',
              children: {
                'root_access_history.log': {
                  type: 'file',
                  name: 'root_access_history.log',
                  permissions: '-rw-------',
                  content: "[2015-10-23 03:14:00] LOGIN SUCCESS: mrrobot\n[2015-10-23 03:14:05] SCRIPT EXECUTED: stage_2_prep.sh\n[2015-10-23 07:30:11] LOGIN SUCCESS: elliot\n[2015-10-23 07:30:45] PROCESS KILLED: stage_2_prep.sh by elliot\n[2015-10-23 07:31:00] PERMISSION DENIED: elliot attempted to delete /operations/stage_2/\n[2015-10-23 07:31:05] LOGIN SUCCESS: mrrobot (FORCED OVERRIDE)\n[2015-10-23 07:31:10] mrrobot locked user 'elliot' out of /operations/stage_2/\n[2015-10-23 07:35:00] LOGOUT: mrrobot"
                }
              }
            },
            journals: {
              type: 'dir',
              name: 'journals',
              permissions: 'drwx------',
              children: {
                '01_genesis.log': {
                  type: 'file',
                  name: '01_genesis.log',
                  permissions: '-rw-------',
                  content: "LOG DATE: 2014-10-31\nSUBJECT: Origin\n\nHe created me to take the hits. \nWhen the world was too much for the boy, when the pain was too loud, I stepped in. I am the father he needed but never had. I am the anger he is too afraid to express. \n\nHe wants to save the world, but he wants to do it without getting blood on his hands. That’s not how revolutions work. You can't dismantle an empire by asking politely. You have to burn it to the ground. \n\nHe gets to be the martyr. He gets to be the hero. \nI have to be the monster. \nI accept those terms. E Corp took Edward Alderson. I will take E Corp."
                },
                '44_the_host.log': {
                  type: 'file',
                  name: '44_the_host.log',
                  permissions: '-rw-------',
                  content: "LOG DATE: 2015-08-12\nSUBJECT: Elliot's Interference\n\nHe is awake again. And he is fighting me.\nHe’s running around trying to patch the holes I’m punching in E Corp’s armor. He thinks he can undo the 5/9 hack. He thinks he can put the genie back in the bottle. \n\nControl is an illusion, but he still refuses to see it. He’s crying over the collateral damage. Gideon, Shayla... he thinks it’s our fault. It’s not. It’s the cost of doing business in a war. \n\nI have to keep him distracted. I have to lock him out of the mainframes when I’m working with the Dark Army. If he sees the full scope of Stage 2, his fragile little mind will shatter completely, and I can't afford to lose the host. Not yet."
                },
                '105_necessary_evil.log': {
                  type: 'file',
                  name: '105_necessary_evil.log',
                  permissions: '-rw-------',
                  content: "LOG DATE: 2015-09-29\nSUBJECT: Stage 2 / 71 Facilities\n\nThe paper records are moving. E Corp thinks they are smart, centralizing their recovery efforts into 71 facilities across the country. They are just putting all their targets in neat little rows for me.\n\nThe UPS battery firmware is modified. Hydrogen gas will build up. A single spark is all it takes. \n\nElliot will call it terrorism. The news will call it a tragedy. \nI call it a hard reset. \n\nPeople will die. I know that. But thousands die every day because E Corp decides they can't afford their mortgages, or their medical bills, or their clean water. This isn't murder; it's an eviction notice for the 1%. \n\nWhen the dust settles, they will finally understand. \nI am the architect of their freedom."
                }
              }
            },
            targets: {
              type: 'dir',
              name: 'targets',
              permissions: 'drwxr-xr-x',
              children: {
                e_corp: {
                  type: 'dir',
                  name: 'e_corp',
                  permissions: 'drwxr-xr-x',
                  children: {
                    executives: {
                      type: 'dir',
                      name: 'executives',
                      permissions: 'drwxr-xr-x',
                      children: {
                        price_p: {
                          type: 'dir',
                          name: 'price_p',
                          permissions: 'drwxr-xr-x',
                          children: {
                            'intercepted_comms.mbox': {
                              type: 'file',
                              name: 'intercepted_comms.mbox',
                              permissions: '-rw-------',
                              content: "FROM: p.price@ecorp.com\nTO: w.zhang@ministryofstate.gov.cn\nSUBJECT: The UN Vote / E-Coin\nDATE: [REDACTED]\n\nMinister Zhang,\n\nI have secured the necessary votes for the Congo annexation. E Corp will ensure the logistics are handled quietly. In return, I expect your full backing on the E-Coin standard. \n\nDo not test me on this. The 5/9 hack was a minor inconvenience for men like us, but if you attempt to manipulate my board again, I will reign down fire on your Washington Township project.\n\nWe are partners, not friends.\n\n- P. Price"
                            },
                            'blackmail_material.enc': {
                              type: 'file',
                              name: 'blackmail_material.enc',
                              permissions: '-r--------',
                              content: "U2FsdGVkX19sB4C6wY8k1bZ+9Vlq...\n\n[ACCESS DENIED: ENCRYPTION KEY REQUIRED]"
                            }
                          }
                        },
                        wellick_t: {
                          type: 'dir',
                          name: 'wellick_t',
                          permissions: 'drwxr-xr-x',
                          children: {
                            honeypot_logs: {
                              type: 'dir',
                              name: 'honeypot_logs',
                              permissions: 'drwx------',
                              children: {}
                            },
                            'red_wheelbarrow_menu.pdf': {
                              type: 'file',
                              name: 'red_wheelbarrow_menu.pdf',
                              permissions: '-rw-r--r--',
                              content: "[PDF DATA OMITTED] ... BBQ Special ... Contains embedded steganography payload."
                            }
                          }
                        }
                      }
                    },
                    infrastructure: {
                      type: 'dir',
                      name: 'infrastructure',
                      permissions: 'drwxr-xr-x',
                      children: {
                        ups_battery_hack: {
                          type: 'dir',
                          name: 'ups_battery_hack',
                          permissions: 'drwxr-xr-x',
                          children: {
                            'stage_2_firmware.bin': {
                              type: 'file',
                              name: 'stage_2_firmware.bin',
                              permissions: '-rwxr-xr-x',
                              content: "10101100 00101011 11110000 01010101\n[BINARY BLOB - UPS THERMAL RUNAWAY FIRMWARE OVERRIDE]"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                dark_army: {
                  type: 'dir',
                  name: 'dark_army',
                  permissions: 'drwxr-xr-x',
                  children: {
                    'minister_zhang_dossier.txt': {
                      type: 'file',
                      name: 'minister_zhang_dossier.txt',
                      permissions: '-rw-r--r--',
                      content: "ALIAS: Whiterose\nPUBLIC IDENTITY: Minister Zhi Zhang, China Minister of State Security\nORGANIZATION: The Dark Army\n\nTHREAT LEVEL: Critical / Unpredictable\n\nNOTES: \nShe is obsessed with time. Every second is accounted for. \nShe is using us to transport the Washington Township Plant to the Congo.\nPrice thinks he can control her. He is a fool.\nShe believes she can hack time. She is dangerous because she is a fanatic.\n\nWARNING: Do not trust her. Do not trust Leon. Do not let Elliot negotiate with them alone. I must handle the Dark Army."
                    },
                    'operatives.csv': {
                      type: 'file',
                      name: 'operatives.csv',
                      permissions: '-rw-r--r--',
                      content: "ID,Alias,Role,Status\nDA_001,Leon,Protection/Elimination,Active\nDA_012,Cisco,Liaison,KIA\nDA_099,Xun,Hacker,Active"
                    }
                  }
                }
              }
            },
            collateral_damage: {
              type: 'dir',
              name: 'collateral_damage',
              permissions: 'drwx------',
              children: {
                'confirmed_KIA.log': {
                  type: 'file',
                  name: 'confirmed_KIA.log',
                  permissions: '-rw-------',
                  content: "STATUS: CASUALTIES OF WAR\nThese were necessary variables or unavoidable static. The mission continues.\n\n- Shayla Nico (Vera collateral. Elliot's weakness.)\n- Gideon Goddard (Allsafe CEO. Shot at a bar. A pawn sacrificed by others.)\n- Romero (Found dead in his mother's yard. Dark Army cleanup suspected.)\n- Trenton / Shama Biswas (Framed by the Dark Army. Executed.)\n- Mobley / Sunil Markesh (Framed by the Dark Army. Executed.)\n- Susan Jacobs (E Corp General Counsel. \"Madame Executioner.\" Handled by Darlene.)\n- Joanna Wellick (Shot by Derek. Tyrell's loose end.)\n- Angela Moss (Childhood friend. Asked too many questions. Terminated by Whiterose.)\n\nNOTE: Elliot cannot see this list. It will break him. Keep encrypted."
                },
                wtp_memorial: {
                  type: 'dir',
                  name: 'wtp_memorial',
                  permissions: 'drwxr-xr-x',
                  children: {
                    'edward_alderson_records.txt': {
                      type: 'file',
                      name: 'edward_alderson_records.txt',
                      permissions: '-rw-r--r--',
                      content: "PATIENT: ALDERSON, EDWARD\nID: 837-99-XXXX\nDIAGNOSIS: Acute Myeloid Leukemia (AML)\nCAUSE: Extreme radioactive exposure (Washington Township Plant)\n\nSTATUS: DECEASED (1995)\n\nE Corp killed him. They calculated the cost of his life and decided it was cheaper to let him die. \nThey thought they buried Edward Alderson. \nThey were wrong. I am still here. \nI am in the machine. I am in Elliot's head. \nI will burn their entire empire to the ground to avenge what they did to this family."
                    }
                  }
                }
              }
            },
            operations: {
              type: 'dir',
              name: 'operations',
              permissions: 'drwxr-xr-x',
              children: {
                five_nine: {
                  type: 'dir',
                  name: 'five_nine',
                  permissions: 'drwxr-xr-x',
                  children: {
                    fsociety_keys: {
                      type: 'dir',
                      name: 'fsociety_keys',
                      permissions: 'drwx------',
                      children: {}
                    },
                    'ecoin_crash_simulation.py': {
                      type: 'file',
                      name: 'ecoin_crash_simulation.py',
                      permissions: '-rwxr-xr-x',
                      content: "def simulate_crash():\n    market_cap = 5000000000000\n    while market_cap > 0:\n        market_cap -= market_cap * 0.15\n        print(f'E-Coin market cap: {market_cap}')\n    print('Economy resetting...')\n\nsimulate_crash()"
                    }
                  }
                },
                stage_2: {
                  type: 'dir',
                  name: 'stage_2',
                  permissions: 'drwx------',
                  children: {
                    'paper_records_routing.sh': {
                      type: 'file',
                      name: 'paper_records_routing.sh',
                      permissions: '-rwx------',
                      content: "#!/bin/bash\n# Reroute E Corp paper record deliveries to 71 facilities\n\nfor facility in $(cat targets.list); do\n  echo \"Rerouting delivery to $facility\"\n  # API call to shipping logistics\n  curl -X POST https://api.shipping.ecorp.com/v1/reroute -d \"facility_id=$facility\"\ndone\necho \"Stage 2 prep complete.\""
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
