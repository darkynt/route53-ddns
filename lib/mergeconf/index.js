'use strict'

const minimist = require('minimist')
const AWSArgs = ['AWS_ID', 'AWS_SECRET', 'ROUTE53_ID', 'ROUTE53_RECORD']

const filterVars = (envVars, filterList) => {
  let filteredVars = {}
  for (let key in envVars) {
    let outKey = key.toUpperCase()
    if (Object.prototype.hasOwnProperty.call(envVars, key) && (filterList.indexOf(outKey) > -1)) {
      filteredVars[outKey] = envVars[key]
    }       
  }
  return filteredVars
}

const mergeVars = (opts1, opts2) => {
  return Object.assign(Object.assign({}, opts1), opts2)
}


const fromEnvVars = filterVars(process.env, AWSArgs)
const fromRunArgs = filterVars(minimist(process.argv.slice(2)), AWSArgs)
console.log(JSON.stringify(mergeVars(fromEnvVars, fromRunArgs)))

module.exports = mergeVars(fromEnvVars, fromRunArgs)
