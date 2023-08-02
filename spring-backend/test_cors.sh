#!/bin/bash

dir=$(dirname $0)

access_token=$($dir/get_access_token.sh)

curl -v -X GET \
    -H "Access-Control-Request-Method: GET" \
    -H "Origin: http://localhost:5050" \
    -H "Authorization: Bearer $access_token" \
    http://localhost:8082/todos
