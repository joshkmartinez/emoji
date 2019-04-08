var express = require('express')
var app = express()
const PORT = process.env.PORT || 3000
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

api.get(['/list', '/l'], (req, res) => {
  res.writeHead(302, {
    Location:
      'https://raw.githubusercontent.com/joshkmartinez/emoji/master/emoji.json'
  })
  res.end()
})

api.get(['/r', '/random'], (req, res) => {
  res.send(emoji.random().emoji)
})

api.get('/rick', (req, res) => {
  res.writeHead(302, {
    Location: 'https://rickroll.now.sh'
  })
  res.end()
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
    GET /random
    GET /rick
    
    e.g. GET /smirk
    github.com/joshkmartinez/emoji
    `
  )
})
app.use('/', api)
app.listen(PORT, () => {
  //console.log('Server running on port 3000')
})
