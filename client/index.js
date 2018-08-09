const Tailor = require('node-tailor')
const tailor = new Tailor({
  templatesPath: __dirname + '/templates'
})
const express = require('express')
const app = express()

app.get('*', (req, res) => {
    req.url = '/index' // always select the index.html template
    tailor.requestHandler(req, res)
})

app.get('/product/*', (req, res) => {
    req.url = '/product' // always select the product.html template
    tailor.requestHandler(req, res)
})

app.listen(8080, () => console.log('Client running tailor listening on port 8080'))
