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
                  content: "[2015-03-29 01:15:00] LOGIN SUCCESS: mrrobot\n[2015-03-29 01:20:00] SCRIPT EXECUTED: hvac_override_test.sh\n[2015-03-29 03:45:12] LOGIN SUCCESS: elliot\n[2015-03-29 03:46:00] PROCESS KILLED: hvac_override_test.sh by elliot\n[2015-03-29 03:50:00] LOGOUT: elliot"
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
                '12_the_host.log': {
                  type: 'file',
                  name: '12_the_host.log',
                  permissions: '-rw-------',
                  content: "LOG DATE: 2015-03-15\nSUBJECT: Steel Mountain\n\nHe is hesitating. He wants to save the world, but he's afraid to pull the trigger. \nSteel Mountain is the key. If we melt their backups, E Corp is blind. But he's worried about the collateral. \nHe thinks we can just plant a Raspberry Pi and control the HVAC. It's a half-measure. \nI need to push him. I need to make him see that the only way to destroy them is to leave nothing behind."
                },
                '22_raspberry_pi.log': {
                  type: 'file',
                  name: '22_raspberry_pi.log',
                  permissions: '-rw-------',
                  content: "LOG DATE: 2015-03-28\nSUBJECT: The HVAC Plan\n\nThe plan is set. We infiltrate Steel Mountain. He plants the Pi on the climate control network. \nOnce we're in, we raise the temperature. The magnetic tapes will melt. \nThe Dark Army is handling the redundant backups in China. \nIf he fails, I will take over. The tapes must burn."
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
                              content: "FROM: t.wellick@ecorp.com\nTO: p.price@ecorp.com\nSUBJECT: CTO Position / Colby\nDATE: 2015-03-20\n\nPhillip, \nWith Terry Colby out of the picture due to the recent Allsafe incident, I believe it is time we discuss the CTO position. I have proven my loyalty and my capability to protect this company's infrastructure.\nI request a formal meeting.\n\n- Tyrell Wellick"
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
                            'allsafe_security_audit.pdf': {
                              type: 'file',
                              name: 'allsafe_security_audit.pdf',
                              permissions: '-rw-r--r--',
                              content: "[PDF DATA OMITTED] ... Allsafe Cybersecurity Audit Report ... Status: Vulnerable."
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
                        hvac_systems: {
                          type: 'dir',
                          name: 'hvac_systems',
                          permissions: 'drwxr-xr-x',
                          children: {
                            'climate_control_override.py': {
                              type: 'file',
                              name: 'climate_control_override.py',
                              permissions: '-rwxr-xr-x',
                              content: "def override_hvac():\n    target_temp = 95  # Celsius\n    print(f\"Setting Steel Mountain HVAC to {target_temp}C. Melting tapes...\")\n\noverride_hvac()"
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
                      content: "ALIAS: Whiterose\nORGANIZATION: The Dark Army\n\nTHREAT LEVEL: High / Unknown\n\nNOTES: \nThey are the only ones who can hit the China backup servers simultaneously. \nWithout them, Steel Mountain is pointless. E Corp would just restore from China.\nCisco is our liaison, but he's a pawn. We need to secure Whiterose's cooperation."
                    },
                    'operatives.csv': {
                      type: 'file',
                      name: 'operatives.csv',
                      permissions: '-rw-r--r--',
                      content: "ID,Alias,Role,Status\nDA_012,Cisco,Liaison,Active"
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
                'potential_collateral.log': {
                  type: 'file',
                  name: 'potential_collateral.log',
                  permissions: '-rw-------',
                  content: "STATUS: ACCEPTABLE LOSSES\nIf the Steel Mountain gas pipes explode, there will be casualties.\n\n- Steel Mountain Security Personnel\n- Local civilians in adjacent blocks\n\nElliot cannot stomach this. He wants to use a Raspberry Pi instead of blowing the pipeline. I may have to let him try his way first, just to get him inside the building."
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
                    'fsociety_video_render.sh': {
                      type: 'file',
                      name: 'fsociety_video_render.sh',
                      permissions: '-rwxr-xr-x',
                      content: "#!/bin/bash\n# Render the next fsociety manifesto video\nffmpeg -i raw_mask_footage.mp4 -vf \"curves=m='0/0 0.5/0.8 1/1'\" final_manifesto.mp4"
                    }
                  }
                },
                steel_mountain: {
                  type: 'dir',
                  name: 'steel_mountain',
                  permissions: 'drwx------',
                  children: {
                    'raspberry_pi_payload.sh': {
                      type: 'file',
                      name: 'raspberry_pi_payload.sh',
                      permissions: '-rwx------',
                      content: "#!/bin/bash\n# Payload for the Raspberry Pi at Steel Mountain\n# Connects to the HVAC subnet and begins temperature override\n\necho \"Infiltrating HVAC subnet...\"\nping -c 4 10.233.1.1\necho \"Overriding thermostat controls. Setting to max.\""
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
