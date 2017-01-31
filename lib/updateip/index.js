const AWS = require('aws-sdk')

function prepareOptions(config) {
  return {
    accessKeyId: config['AWS_ID'],
    secretAccessKey: config['AWS_SECRET'],
    region: config['AWS_REGION'],
    
  }
}


module.exports = (config, ip) => {
  const opts = prepareOptions(config)
  const route53Service = new AWS.Route53(opts)
  let route53 = new AWS.Route53(opts)
  let newRoute53Config = {
    HostedZoneId: '',
    ChangeBatch: {
      Changes: [
        {
          Action: 'UPSERT',
          ResourceRecordSet: {
            Name: '',
            Type: 'A',
            TTL: 300,
            ResourceRecords: [
              {
                Value: ''
              }
            ]
          }
        }
      ]
    }
  }
  route53.changeResourceRecordSets(newRoute53Config, (er, data) => {
    if (er) console.log(er)
    if (data) console.log(JSON.stringify(data))
  })
}
