#!/bin/bash

dir=$(dirname $0)

access_token=$($dir/get_access_token.sh)

curl -s -H "Authorization: Bearer $access_token" http://localhost:8082/todos?size=1000 | jq .
curl -s -H "Authorization: Bearer $access_token" http://localhost:8082/todos/count | jq .
