#!/bin/bash

# Give execute permission with:  chmod +x token.sh

# -*- ENCODING: UTF-8 -*-

echo "Get new token"

curl "https://test.api.amadeus.com/v1/security/oauth2/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id={API Key}&client_secret={API Secret}" \
     -o response.txt 

echo "Copy new tokens"

grep -E "((\"token_type\")|(\"access_token\"))" response.txt > responseGrep.txt

echo "Modify tokens"

sed -E -i.back "s/(\s*\"token_type\"\:\s\")/VITE_TOKEN_TYPE=/g" responseGrep.txt
sed -E -i.back "s/(\s*\"access_token\"\:\s\")/VITE_ACCESS_TOKEN=/g" responseGrep.txt
sed -E -i.back 's/(\"\,)/ /g' responseGrep.txt

echo "Modify env.local file"

cp -f responseGrep.txt .env.local

echo "VITE_API_URL=https://test.api.amadeus.com" >> .env.local

echo "Delete response files"
rm response.txt
rm responseGrep.*

echo "Exit"
exit 0