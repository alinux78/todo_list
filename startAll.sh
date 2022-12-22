#!/bin/bash

docker start postgresql
docker start pgadmin

cd ./spring-backend/
./start.sh &
cd -


cd ui
./start.sh