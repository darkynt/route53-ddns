const request = require('request')
const Promise = require('bluebird')
const ipsource = process.env['ipsource'] || 'http://ifconfig.co/json'

const fetchIpData = () => {
  return new Promise((resolve, reject) => {
    request(ipsource, (er, res, val) => {
      if (er || res.statusCode !== 200) return reject(er || new Error(res.statusCode))
      resolve(val)
    })
  })
}

module.exports = fetchIpData()
  .then(data => {
    ipObject = JSON.parse(data)
    console.log('Retrieved and parsed:', ipObject)
    return Promise.resolve(ipObject.ip)
})
  
