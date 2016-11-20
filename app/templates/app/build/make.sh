#!/bin/sh
node ./build/make-tags.js > ./app/tags.js;
node ./build/make-app.js > ./../app.html;