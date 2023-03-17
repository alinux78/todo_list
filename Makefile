
all: ui-image spring-image

ui-image:
	cd ui && \
	docker build -t todo-app-ui .

spring-image:
	cd spring-backend && \
	mvn  jib:dockerBuild
