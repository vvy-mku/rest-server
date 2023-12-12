const express = require('express')
const data = require('./data');

const messagesRouter = express.Router()


messagesRouter.use('/', (req, res, next) => {
  // Before handler 
  if (!('userId' in req.cookies)) {
    res.status(401).end();
    return
  }
  const authUser = data.users.find((elem) => elem.id == req.cookies.userId);
  if (!authUser) {
    res.status(401).end();
    return
  }
  req.authUser = authUser;
  next()
  // After
})

// Send all messages
messagesRouter.get('/', (req, res) => {
  res.send(data.messages);
})

// Create a new message
messagesRouter.post('/', (req, res) => {
  let message = req.body;
  // TODO: Validate message format
  // TODO: {"text": <string>, "author": <string>}
  message.id = data.messages.length + 1;
  message.author = req.authUser.username;
  data.messages.push(message);
  res.cookie('test', message.id)
  res.status(201).end();
})

// Update a message with id <messageId>
messagesRouter.put('/:messageId', (req, res) => {
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

messagesRouter.delete('/:messageId', (req, res) => {
  // TODO: remove message with id
})

module.exports = messagesRouter;