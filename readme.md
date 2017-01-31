
## Overview
This checks for changes to your public facing IP address (in line with the TTL specified) and updates a single record in AWS to point back at it.

## Requirements
You'll need a Hosted Zone in Amazon Route53, and an IAM user who's allowed to write updates to it - their AWS Key and Secret.

## Parameters
These can either be set as Environment Variables or passed as command line options..

`AWS_ID` Your AWS ID
`AWS_SECRET` Your AWS Secret
`AWS_REGION` The AWS Region (eg EU_WEST_1)
`TTL` Is the TTL that will be sent to the DNS Provider, this is also used to set the retry rate for checking your IP
`ROUTE53_ID` 
`ROUTE53_RECORD`

eg ```$ node index.js --AWS_ID=yourAWSId --AWS_SECRET=asdfasdfasdfasdf --AWS_REGION=eu-west-1 --ROUTE53_ID=ROUTE53ZONEID --ROUTE53_RECORD=*.mydomain.co.uk --TTL=300 ```

