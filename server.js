require('dotenv').config()

const express = require('express')
const path = require('path')
const app = express()

const publicDir = path.join(__dirname, 'eulaPages')

app.get(['/', '/en'], function (req, res) {
  res.sendFile(publicDir + '/en.html')
})
app.get('/es', function (req, res) {
  res.sendFile(publicDir + '/es_PR.html')
})
app.get('/ht', function (req, res) {
  res.sendFile(publicDir + '/ht.html')
})

app.listen(process.env.PORT, () => console.log(`Example app listening at http://localhost:${process.env.PORT}`))