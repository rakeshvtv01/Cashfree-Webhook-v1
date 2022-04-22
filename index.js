const crypto = require('crypto');


let postData = '{"data":{"order":{"order_id":"b1de0200-192a-4391-adcb-5467660ae029","order_amount":12.00,"order_currency":"INR","order_tags":null},"payment":{"cf_payment_id":885159039,"payment_status":"SUCCESS","payment_amount":12.00,"payment_currency":"INR","payment_message":"Transaction pending","payment_time":"2022-04-21T17:39:16+05:30","bank_reference":"321640","auth_id":null,"payment_method":{"card":{"channel":null,"card_number":"444433XXXXXX1111","card_network":"visa","card_type":"credit_card","card_country":"IN","card_bank_name":"Others"}},"payment_group":"credit_card"},"customer_details":{"customer_name":null,"customer_id":null,"customer_email":"dev@charzeblock.com","customer_phone":"8390376480"}},"event_time":"2022-04-21T17:39:24+05:30","type":"PAYMENT_SUCCESS_WEBHOOK"}';

let merchantSecretKey = '0b1544e55a7fe9b39f0b5906a09498870d109320';
let timestamp = '1650542964275';

let signedPayload =  timestamp.concat(postData);

console.log(signedPayload);


const expectedSignature = crypto
    .createHmac('sha256', merchantSecretKey)
    .update(signedPayload)
    .digest('base64');

    console.log(expectedSignature);

