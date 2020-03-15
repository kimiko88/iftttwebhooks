# simple-ifttt-webhooks

[![Build Status](https://travis-ci.org/kimiko88/iftttwebooks.svg?branch=master)](https://travis-ci.org/kimiko88/iftttwebooks) [![Coverage Status](https://coveralls.io/repos/github/kimiko88/iftttwebooks/badge.svg)](https://coveralls.io/github/kimiko88/iftttwebooks)

A simple library to use ifttt webooks. No external dependency

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm i simple-ifttt-webhooks
```

### Example

#### Send request 
```
const siftttwebhooks = require('simple-ifttt-webhooks')
var res = await siftttwebhooks.sendRequest('test','testsecret', {"value1":"prova"})
```
