#!/bin/bash

export POSTGRES_HOST=${POSTGRES_HOST:-localhost}
export POSTGRES_PORT=${POSTGRES_PORT:-5432}
export POSTGRES_USER=${POSTGRES_USER:-todo}
export POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-todo}

./mvnw spring-boot:run
