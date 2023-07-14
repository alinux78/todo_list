ARG DOCKER_HUB="docker.io"
ARG NGINX_VERSION="1.17.6"
ARG NODE_VERSION="16.17-alpine"

FROM $DOCKER_HUB/library/node:$NODE_VERSION as build

ARG NPM_REGISTRY="https://registry.npmjs.org"

COPY . /workspace/
RUN apk add yarn
RUN echo "registry = \"$NPM_REGISTRY\"" > /workspace/.npmrc                              && \
    cd /workspace/                                                                       && \
    rm package-lock.json                                                                 && \
    npm install                                                                          && \
    npm run build

FROM $DOCKER_HUB/library/nginx:$NGINX_VERSION
RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx.conf /etc/nginx/nginx.conf


COPY  --from=build --chown=nginx /workspace/dist/ui /usr/share/nginx/html/

EXPOSE 8081

#TODO fix this
#USER nginx

#HEALTHCHECK     CMD     [ "service", "nginx", "status" ]

CMD ["nginx", "-g", "daemon off;"]

