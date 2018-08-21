const http = require('http')
const url = require('url')
const fs = require('fs')
const fragmentPort = 8082
const fragmentServer = '34.245.40.163'

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
  const jsHeader = { 'Content-Type': 'application/javascript' }
  switch(pathname) {
    case '/public/bundle.js':
      res.writeHead(200, jsHeader)
      return fs.createReadStream('./public/bundle.js').pipe(res)
    default:
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Link': `<http://${fragmentServer}:${fragmentPort}/public/bundle.js>; rel="fragment-script"`
      })
      return res.end('')
  }
})

server.listen(fragmentPort, () => {
  console.log(`fragment-header server started at ${fragmentPort}`)
})
