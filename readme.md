
## Overview
This checks for changes to your public facing IP address (in line with the TTL specified) and updates a single record in AWS to point back at it.

## Requirements
You'll need a Hosted Zone in Amazon Route53, and an IAM user who's allowed to write updates to it - their AWS Key and Secret.

## Parameters
These can either be set as Environment Variables or passed as command line options..

*`AWS_ID` Your AWS ID
*`AWS_SECRET` Your AWS Secret
*`AWS_REGION` The AWS Region (eg EU_WEST_1)
*`TTL` Is the TTL that will be sent to the DNS Provider, this is also used to set the retry rate for checking your IP
*`ROUTE53_ID` Is the ID of the Hosted Zone where your record lives 
*`ROUTE53_RECORD` Is the record to update - eg *.mydomain.com

eg ```$ node index.js --AWS_ID=yourAWSId --AWS_SECRET=asdfasdfasdfasdf --AWS_REGION=eu-west-1 --ROUTE53_ID=ROUTE53ZONEID --ROUTE53_RECORD=*.mydomain.co.uk --TTL=300 ```

## Raspberry Pi Using Docker/Docker-compose
1. Install docker on your RPi ```$ sudo curl https://get.docker.com | sh```
2. Edit `config.env` to add the parameters as environment variables
3. Install Docker-Compose on your device ```$ sudo pip install docker-compose```
4. Run ```docker-compose up -d```
