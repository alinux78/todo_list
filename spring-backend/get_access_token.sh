#!/bin/bash

client_id=todo_list
user="user"
password="user"
curl -s -d "client_id=${client_id}" -d "username=${user}" -d "password=${password}" -d 'grant_type=password' \
http://localhost:9090/realms/todo_app/protocol/openid-connect/token \
| jq  -r .access_token


