const https = require('https')

const iftttwebhooks = {
  sendRequest(event, secret, body, method = 'POST') {
    const baseUrl = new URL(`https://maker.ifttt.com/trigger/${event}/with/key/${secret}`)
    return new Promise((resolve, reject) => {
      const request = https.request({
        path: baseUrl.pathname,
        host: baseUrl.hostname,
        port: baseUrl.port,
        method,
        headers: {"content-type": "application/json"}
      }, async (response) => {
        if (response.statusCode < 200 || response.statusCode > 299) {
          console.log(`Failed to load page, status code: ${response.statusCode}`)
        }
        const bodyChunks = []
        response.on('data', chunk => bodyChunks.push(chunk))
        response.on('end', () => {
          const body = Buffer.concat(bodyChunks)
          if (response.headers) {
            const bodyResponse = body.toString('utf8')
            // if (hasHeaderAndValue('content-type', 'application/json')) {
              if(response.statusCode >= 200 || response.statusCode <= 299){
              try {
                resolve({ data: bodyResponse ? JSON.parse(bodyResponse) : undefined, headers: response.headers, code: response.statusCode })
              } catch (err) {
                console.error(err)
                resolve(undefined)
              }
            }else{
              resolve({ data: bodyResponse, headers: response.headers, code: response.statusCode })
            }
            // } else {
            //   resolve({ data: bodyResponse, headers: response.headers, code: response.statusCode })
            // }
          }
        })
        request.on('error', (err) => {
          console.error(err)
          reject(err)
        })
      })
      if (body) {
        request.write(JSON.stringify(body))
      }
      request.end()
    })
  }
}

module.exports = iftttwebhooks
