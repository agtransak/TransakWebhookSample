const jwt = require('jsonwebtoken');

const webhookData = "WEBHOOK_DATA"

const accessToken = "ACCESS_TOKEN"

const decodedData = jwt.verify(webhookData, accessToken);

console.log(decodedData);