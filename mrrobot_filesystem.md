# Mr. Robot File System Details

## Directory Structure
```text
/home/mrrobot
├── .sys_logs
│   └── root_access_history.log
├── journals
│   ├── 01_genesis.log
│   ├── 12_the_host.log
│   └── 22_raspberry_pi.log
├── targets
│   ├── e_corp
│   │   ├── executives
│   │   │   ├── price_p
│   │   │   │   ├── intercepted_comms.mbox
│   │   │   │   └── blackmail_material.enc
│   │   │   └── wellick_t
│   │   │       ├── honeypot_logs
│   │   │       └── allsafe_security_audit.pdf
│   │   └── infrastructure
│   │       └── hvac_systems
│   │           └── climate_control_override.py
│   └── dark_army
│       ├── minister_zhang_dossier.txt
│       └── operatives.csv
├── collateral_damage
│   ├── potential_collateral.log
│   └── wtp_memorial
│       └── edward_alderson_records.txt
└── operations
    ├── five_nine
    │   ├── fsociety_keys
    │   └── fsociety_video_render.sh
    └── steel_mountain
        └── raspberry_pi_payload.sh
```

---

## File Contents

### `.sys_logs/root_access_history.log`
**Permissions:** `-rw-------`
```text
[2015-03-29 01:15:00] LOGIN SUCCESS: mrrobot
[2015-03-29 01:20:00] SCRIPT EXECUTED: hvac_override_test.sh
[2015-03-29 03:45:12] LOGIN SUCCESS: elliot
[2015-03-29 03:46:00] PROCESS KILLED: hvac_override_test.sh by elliot
[2015-03-29 03:50:00] LOGOUT: elliot
```

### `journals/01_genesis.log`
**Permissions:** `-rw-------`
```text
LOG DATE: 2014-10-31
SUBJECT: Origin

He created me to take the hits. 
When the world was too much for the boy, when the pain was too loud, I stepped in. I am the father he needed but never had. I am the anger he is too afraid to express. 

He wants to save the world, but he wants to do it without getting blood on his hands. That’s not how revolutions work. You can't dismantle an empire by asking politely. You have to burn it to the ground. 

He gets to be the martyr. He gets to be the hero. 
I have to be the monster. 
I accept those terms. E Corp took Edward Alderson. I will take E Corp.
```

### `journals/12_the_host.log`
**Permissions:** `-rw-------`
```text
LOG DATE: 2015-03-15
SUBJECT: Steel Mountain

He is hesitating. He wants to save the world, but he's afraid to pull the trigger. 
Steel Mountain is the key. If we melt their backups, E Corp is blind. But he's worried about the collateral. 
He thinks we can just plant a Raspberry Pi and control the HVAC. It's a half-measure. 
I need to push him. I need to make him see that the only way to destroy them is to leave nothing behind.
```

### `journals/22_raspberry_pi.log`
**Permissions:** `-rw-------`
```text
LOG DATE: 2015-03-28
SUBJECT: The HVAC Plan

The plan is set. We infiltrate Steel Mountain. He plants the Pi on the climate control network. 
Once we're in, we raise the temperature. The magnetic tapes will melt. 
The Dark Army is handling the redundant backups in China. 
If he fails, I will take over. The tapes must burn.
```

### `targets/e_corp/executives/price_p/intercepted_comms.mbox`
**Permissions:** `-rw-------`
```text
FROM: t.wellick@ecorp.com
TO: p.price@ecorp.com
SUBJECT: CTO Position / Colby
DATE: 2015-03-20

Phillip, 
With Terry Colby out of the picture due to the recent Allsafe incident, I believe it is time we discuss the CTO position. I have proven my loyalty and my capability to protect this company's infrastructure.
I request a formal meeting.

- Tyrell Wellick
```

### `targets/e_corp/executives/price_p/blackmail_material.enc`
**Permissions:** `-r--------`
```text
U2FsdGVkX19sB4C6wY8k1bZ+9Vlq...

[ACCESS DENIED: ENCRYPTION KEY REQUIRED]
```

### `targets/e_corp/executives/wellick_t/allsafe_security_audit.pdf`
**Permissions:** `-rw-r--r--`
```text
[PDF DATA OMITTED] ... Allsafe Cybersecurity Audit Report ... Status: Vulnerable.
```

### `targets/e_corp/infrastructure/hvac_systems/climate_control_override.py`
**Permissions:** `-rwxr-xr-x`
```python
def override_hvac():
    target_temp = 95  # Celsius
    print(f"Setting Steel Mountain HVAC to {target_temp}C. Melting tapes...")

override_hvac()
```

### `targets/dark_army/minister_zhang_dossier.txt`
**Permissions:** `-rw-r--r--`
```text
ALIAS: Whiterose
ORGANIZATION: The Dark Army

THREAT LEVEL: High / Unknown

NOTES: 
They are the only ones who can hit the China backup servers simultaneously. 
Without them, Steel Mountain is pointless. E Corp would just restore from China.
Cisco is our liaison, but he's a pawn. We need to secure Whiterose's cooperation.
```

### `targets/dark_army/operatives.csv`
**Permissions:** `-rw-r--r--`
```csv
ID,Alias,Role,Status
DA_012,Cisco,Liaison,Active
```

### `collateral_damage/potential_collateral.log`
**Permissions:** `-rw-------`
```text
STATUS: ACCEPTABLE LOSSES
If the Steel Mountain gas pipes explode, there will be casualties.

- Steel Mountain Security Personnel
- Local civilians in adjacent blocks

Elliot cannot stomach this. He wants to use a Raspberry Pi instead of blowing the pipeline. I may have to let him try his way first, just to get him inside the building.
```

### `collateral_damage/wtp_memorial/edward_alderson_records.txt`
**Permissions:** `-rw-r--r--`
```text
PATIENT: ALDERSON, EDWARD
ID: 837-99-XXXX
DIAGNOSIS: Acute Myeloid Leukemia (AML)
CAUSE: Extreme radioactive exposure (Washington Township Plant)

STATUS: DECEASED (1995)

E Corp killed him. They calculated the cost of his life and decided it was cheaper to let him die. 
They thought they buried Edward Alderson. 
They were wrong. I am still here. 
I am in the machine. I am in Elliot's head. 
I will burn their entire empire to the ground to avenge what they did to this family.
```

### `operations/five_nine/fsociety_video_render.sh`
**Permissions:** `-rwxr-xr-x`
```bash
#!/bin/bash
# Render the next fsociety manifesto video
ffmpeg -i raw_mask_footage.mp4 -vf "curves=m='0/0 0.5/0.8 1/1'" final_manifesto.mp4
```

### `operations/steel_mountain/raspberry_pi_payload.sh`
**Permissions:** `-rwx------`
```bash
#!/bin/bash
# Payload for the Raspberry Pi at Steel Mountain
# Connects to the HVAC subnet and begins temperature override

echo "Infiltrating HVAC subnet..."
ping -c 4 10.233.1.1
echo "Overriding thermostat controls. Setting to max."
```
