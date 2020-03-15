const assert = require('assert')
const iftttwebooks = require('../iftttwebooks')

describe('iftttwebooks', () => {
    it('iftttwebooks', async () => {
        var res = await iftttwebooks.sendRequest('test','testsecret', {"value1":"prova"})
        assert.notEqual(res.data, undefined, "data is undefined")
        assert.notEqual(res.headers, undefined)
        assert.equal(res.code, 401)
    })
})
