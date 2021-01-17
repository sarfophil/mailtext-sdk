[![npm version](https://badge.fury.io/js/mailtext-send.svg)](http://badge.fury.io/js/mailtext-send)
[![Build Status](https://travis-ci.org/sarfophil/mailtext-sdk.svg)](https://travis-ci.org/sarfophil/mailtext-send)
[![Coverage Status](https://coveralls.io/repos/sarfophil/mailtext-send/badge.svg?branch=master&service=github)](https://coveralls.io/github/sarfophil/mailtext-send?branch=master)
[![Code Climate](https://codeclimate.com/github/sarfophil/mailtext-send/badges/gpa.svg)](https://codeclimate.com/github/sarfophil/mailtext-send)
[![Inch CI](https://inch-ci.org/github/sarfophil/mailtext-send.svg?branch=master)](https://inch-ci.org/github/sarfophil/mailtext-send)

[![Dependency Status](https://david-dm.org/sarfophil/mailtext-send/status.svg)](https://david-dm.org/sarfophil/mailtext-send#info=dependencies)
[![devDependency Status](https://david-dm.org/sarfophil/mailtext-send/dev-status.svg)](https://david-dm.org/sarfophil/mailtext-send#info=devDependencies)

[![Known Vulnerabilities](https://snyk.io/test/github/sarfophil/gmail-send/badge.svg)](https://snyk.io/test/github/sarfophil/mailtext-send)


# Mailtext-send
Minimalistic module to send bulk sms using Mailtext

Basically it's a wrapper to simplify its usage for Mailtext accounts even more.

If you have different needs regarding the functionality, please add a [feature request](https://github.com/sarfophil/mailtext-send/issues).

# Install

```bash
npm install --save mailtext-send
```

# Prerequisites
### Preparation step - Configure your Mailtext account
In order to send sms using MailText you need your account to be configured properly.

1) Visit https://partner.mailtext.co/ and create an account.
2) Login into your account at https://app.mailtext.co/login. Click on Recharge Wallet Menu to load your wallet.


# Quick Start
1) Initialization: require the module and set defaults
```js
 const mailtext = require('mailtext-send')
 mailtext(account).send(message, (res, err) => { console.log(res) })
```
- `account` - mandatory - an object with the following basic authentication properties
    - `email` - mandatory
    - `password` - mandatory
    
- `message` - mandatory - an object with properties for sending bulk sms
    - `numbers` - mandatory - array of `string` phonenumbers. ['8989898932','908989394']
    - `sms_id` - mandatory 
    -  `message` - mandatory
    -  `type` - mandatory - type of sms. You can set default to `bulk`

## Credits
[Philip](https://github.com/sarfophil/)

# Troubleshooting
1) If you an exception with message "** Error: An error occurred while getting token. Visit https://partner.mailtext.co for more details. Error: Not Found
 **". You should check your account credentials / Sign up for an account on https://partner.mailtext.co

2) If you an exception with message "** Error: An error occurred while sending SMS. Visit https://partner.mailtext.co for more details. Error message: Payment Required
    **". You should top up your wallet.

## Links to package pages:
[github.com](https://github.com/sarfophil/mail-send) &nbsp; [npmjs.com](https://www.npmjs.com/package/mailtext-send) &nbsp; [travis-ci.org](https://travis-ci.org/sarfophil/mailtext-send) &nbsp; [coveralls.io](https://coveralls.io/github/sarfophil/mailtext-send) &nbsp; [inch-ci.org](https://inch-ci.org/github/sarfophil/mailtext-send)


## License

MIT
