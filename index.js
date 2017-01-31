'use strict'

const getIp = require('./lib/getip')
const mergedConf = require('./lib/mergeconf')
var lastIp

console.log("Okay")
getIp.then(ip => {
  if (ip !== lastIp)
  updateIP(mergedConf, ip)
})
