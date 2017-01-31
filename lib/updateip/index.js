const AWS = require('aws-sdk')

function prepareOptions(config) {
  return {
    accessKeyId: config['AWS_ID'],
    secretAccessKey: config['AWS_SECRET'],
    region: config['AWS_REGION']
  }
}


module.exports = (config, ip) => {
  const opts = prepareOptions(config)
  const route53Service = new AWS.Route53(opts)
  let route53 = new AWS.Route53(opts)
  let newRoute553Config = {
    ChangeBatch: {
      Changes: [
        {
          Action: 'UPSERT',
          ResourceRecordSet: {
            Name: '',
            Type: 'A',
            TTL: 300,
            Value: ''
          }
      ]
    }
  }
  route53.changeRecordSets(newRoute53Config, () => {})
}
