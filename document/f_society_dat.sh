#!/bin/bash
# Initialize fsociety routine

echo "Bypassing E Corp firewalls..."
sleep 2
echo "Injecting payload into primary storage arrays..."
sleep 2

TARGET_DIR="/mnt/ecorp/financial_records/"

for file in $TARGET_DIR*; do
    # AES-256 Encryption routine
    encrypt_node "$file" --key-server "null" --mode "destroy_key"
    echo "Encrypted: $file"
done

echo "Debt database zeroed."
echo "Executing system wipe..."
rm -rf /var/log/*
echo "We are finally awake."