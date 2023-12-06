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

app.use(express.json())

// Send all messages
app.get('/message', (req, res) => {
  res.send(messages);
})

// Create a new message
app.post('/message', (req, res) => {
  let message = req.body;
  // TODO: Validate message format
  // TODO: {"text": <string>, "author": <string>}
  message.id = messages.length + 1;
  messages.push(message);
  res.status(201).end();
})

// Update a message with id <messageId>
app.put('/message/:messageId', (req, res) => {
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



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})