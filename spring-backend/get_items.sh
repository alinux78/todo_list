#!/bin/bash

dir=$(dirname $0)

access_token=$($dir/get_access_token.sh)

curl -v -s -H "Authorization: Bearer $access_token" http://localhost:8082/todos | jq .
