# Speedier defaults and robust targets
.PHONY: start deps clean build serve

NPM_FLAGS ?= --prefer-offline --no-audit --no-fund

start:
	npm run develop

deps:
	@if [ -d node_modules ]; then \
	  npm i $(NPM_FLAGS); \
	else \
	  npm ci $(NPM_FLAGS); \
	fi

clean:
	rm -rf node_modules

build:
	NODE_ENV=production npm run build

serve:
	npm run serve