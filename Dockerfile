FROM hypriot/rpi-node:7.4.0
ADD package.json package.json
RUN npm install
ADD index.js index.js
ADD lib lib
ENTRYPOINT npm start
