var express = require('express')
var app = express()
const Emoji = require('emojione')
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
api.get('/list', (req, res) => {
  res.sendFile('./emoji.json', { root: __dirname })
})*/
/*
api.get('/:emoji', (req, res) => {
  const emoji = req.params.emoji

  const image = Emoji.shortnameToImage(`:${emoji}:`)
  const re = /png\/(.*).png/
  try {
    image.match(re)[1]
  } catch (e) {
    return res.send('emoji not found')
  }
  const found = image.match(re)[1]
  let filePath = `./node_modules/emojione/assets/png/${found}.png`

  return res.sendFile(filePath, { root: __dirname })
})*/
api.get('/', (req, res) => {
  res.send(
    `
    Endpoints:
    GET /list
    GET /:emojiName
    
    e.g. GET /smirk
    github.com/joshkmartinez/emoji
    `
  )
})
app.use('/', api)
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
