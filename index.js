const cookieParser = require('cookie-parser');
const express = require('express')
const app = express()
const port = 3000

let messages = [
  {
    id: 1,
    text: "Hello. I'm the first message",
    author: "Bob"
  }
]

let users = [
  {
    id: 1,
    username: 'Alex',
    password: "password1234"
  }
]

app.use(express.json())
app.use(cookieParser())

// Send all messages
app.get('/messages', (req, res) => {
  console.log(req.cookies);
  res.send(messages);
})

// Create a new message
app.post('/messages', (req, res) => {
  let message = req.body;
  // TODO: Validate message format
  // TODO: {"text": <string>, "author": <string>}
  message.id = messages.length + 1;
  messages.push(message);
  res.cookie('test', message.id)
  res.status(201).end();
})

// Update a message with id <messageId>
app.put('/messages/:messageId', (req, res) => {
  // TODO: check does id messageId exist in the messages array 
  // req.paras.messageId
  // TODO: else return 404
  let message = req.body;
  console.log(message);
  //
  // TODO: Validate message format
  // TODO: {"text": <string>, "author": <string>}
  // TODO: update message by id
  res.status(200).end();
})

app.delete('/message/:messageId', (req, res) => {
  // TODO: remove message with id
})


app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  // TODO: check user exists and is password correct?
  // TODO: set cookies: usedId
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})