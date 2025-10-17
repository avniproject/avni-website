# Speedier defaults and robust targets
.PHONY: start deps clean build serve

start:
	npm run develop

deps:
	npm i

clean:
	rm -rf node_modules

build:
	NODE_ENV=production npm run build

serve:
	npm run serve