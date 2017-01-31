'use strict'

const getIp = require('./lib/getip')
const mergedConf = require('./lib/mergeconf')
const updateIP = require('./lib/updateip')
var lastIp

console.log("Okay")
const checkAndUpdate = () => {
  getIp.then(ip => {
    if (ip !== lastIp) {
      updateIP(mergedConf, ip)
      lastIp = ip
    }
  })
}
const msUpdateFrequency = parseInt((mergedConf['TTL'] || 300), 10) * 1000
checkAndUpdate()
setInterval(checkAndUpdate, msUpdateFrequency)
