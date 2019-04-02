var express = require('express')
var app = express()
var emoji = require('node-emoji')
const api = express.Router()
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

//order matters
/*
api.get(['/list', '/l'], (req, res) => {
  res.sendFile('./emoji.json', { root: __dirname })
})
*/
api.get(['/r', '/random'], (req, res) => {
  res.send(emoji.random().emoji)
})

api.get('/:emoji', (req, res) => {
  res.send(emoji.get(req.params.emoji))
})

api.get('/', (req, res) => {
  res.send(
    `
    Endpoints:
    GET /list
    GET /emojiName
    
    e.g. GET /smirk
    github.com/joshkmartinez/emoji
    `
  )
})
app.use('/', api)
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
