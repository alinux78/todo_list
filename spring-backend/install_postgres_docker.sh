#!/bin/bash

docker pull postgres:15.1


docker stop postgresql
docker rm postgresql

docker run --name postgresql \
     -e POSTGRES_USER=todo \
     -e POSTGRES_PASSWORD=todo \
     -p 5432:5432 \
     -v pg_data:/var/lib/postgresql/data \
     -d \
     postgres

docker pull dpage/pgadmin4:6.18

docker stop pgadmin
docker rm pgadmin

docker run --name pgadmin \
     -p 4040:80 \
     -e 'PGADMIN_DEFAULT_EMAIL=user@test.com' \
     -e 'PGADMIN_DEFAULT_PASSWORD=Test123' \
     -d dpage/pgadmin4