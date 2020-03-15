# MyHttpRequest

[![Build Status](https://travis-ci.org/kimiko88/myhttprequest.svg?branch=master)](https://travis-ci.org/kimiko88/myhttprequest) [![Coverage Status](https://coveralls.io/repos/github/kimiko88/myhttprequest/badge.svg)](https://coveralls.io/github/kimiko88/myhttprequest)

A simple library to send HTTP request.

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm i myhttprequest
```

### Example

#### GET request 
```
const request = require('myhttprequest')
var res = await request.getContent('https://google.com')
```


#### POST request 
```
const request = require('myhttprequest')
var res = await request.getContent('http://dummy.restapiexample.com/api/v1/create', 'POST', {
    "Content-type": "application/json; charset=UTF-8"}, {name: "foo",salary: "bar",age: 12})
```