#!/bin/bash

dir=$(dirname $0)

count=$1

if [ "$count" == "" ]
then
    echo "items count not provided"
    exit 1
fi

access_token=$($dir/get_access_token.sh)

for ((i=0; i < $count; i++))
do

item=$( cat <<EOF
{
    "summary": "todo_${RANDOM}"
}
EOF
)


echo $item | curl -X POST -v -s \
    -H "Authorization: Bearer $access_token" \
    -H "Content-Type: application/json" \
    http://localhost:8082/todos \
    --data-binary @-

done

