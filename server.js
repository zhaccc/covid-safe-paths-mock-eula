const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))
const publicDir = path.join(__dirname, 'eulaPages')
// app.use(express.static('public'))

app.get(['/', '/en'], function (req, res) {
  res.sendFile(publicDir + '/en.html')
})
app.get('/es', function (req, res) {
  res.sendFile(publicDir + '/es_PR.html')
})
app.get('/ht', function (req, res) {
  res.sendFile(publicDir + '/ht.html')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))