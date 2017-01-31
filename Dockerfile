FROM hypriot/rpi-node:7.4.0
ADD package.json
ADD index.js
ADD lib
ENTRPOINT npm start
