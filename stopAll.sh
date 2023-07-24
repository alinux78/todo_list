#!/bin/bash

docker stop postgresql
docker stop pgadmin
docker stop keycloak
curl -X POST http://localhost:8082/actuator/shutdown
echo "done"


