#!/bin/bash

clean_up () {
    ARG=$?
    docker stop postgresql
    docker stop pgadmin
    docker stop keycloak
    curl -X POST http://localhost:8082/actuator/shutdown
    echo "done"
    exit $ARG
} 
trap clean_up EXIT


docker start postgresql
docker start pgadmin
docker start keycloak

cd ./spring-backend/
./start.sh &
SPRING_PID=$!
cd -


cd ui
./start-with-auth.sh
