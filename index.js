'use strict'

const getIp = require('./lib/getip')
const mergedConf = require('./lib/mergeconf')
const updateIP = require('./lib/updateip')
var lastIp

console.log("Okay")
const checkAndUpdate = () => {
  getIp.then(ip => {
    if (ip !== lastIp)
    updateIP(mergedConf, ip)
  })
}

setInterval(checkAndUpdate, 3000)
