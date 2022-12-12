
all: ui-image

ui-image:
	cd ui && \
	docker build -t todo-app-ui .
