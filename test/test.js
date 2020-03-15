const assert = require('assert')
const iftttwebooks = require('../iftttwebooks')

describe('iftttwebooks', () => {
    it('iftttwebooks', async () => {
        var res = await iftttwebooks.sendRequest('test','testsecret', {"value1":"prova"})
        assert.notEqual(res.data, undefined, "data is undefined")
        assert.notEqual(res.headers, undefined)
        assert.equal(res.code, 401)
    })

    it('no event and secret', async () => {
        var res = await iftttwebooks.sendRequest('','', {"d":"d"})
        assert.equal(res.code, 404)
    })

    it('no secret', async () => {
        var res = await iftttwebooks.sendRequest('test','', {"d":"d"})
        assert.equal(res.code, 404)
    })

    it('send get', async () => {
        var res = await iftttwebooks.sendRequest('test','testsecret', undefined, 'GET')
        assert.notEqual(res.data, undefined, "data is undefined")
        assert.notEqual(res.headers, undefined)
        assert.equal(res.code, 401)
    })

    it('send error', async () => {
        var res = await iftttwebooks.sendRequest()
        assert.notEqual(res.data, undefined, "data is undefined")
        assert.notEqual(res.headers, undefined)
        assert.equal(res.code, 401)
    })
})
