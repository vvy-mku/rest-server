const express = require("express");
const data = require("./data");

const db = require('./db')

const messagesRouter = express.Router();

messagesRouter.use("/", async (req, res, next) => {
  // Before handler
  if (!("userId" in req.signedCookies)) {
    res.status(401).end();
    return;
  }

  const authUser = await db.User.findByPk(req.signedCookies.userId);

  if (!authUser) {
    res.status(401).end();
    return;
  }
  req.authUser = authUser;
  next();
  // After
});

// Send all messages
messagesRouter.get("/", async (req, res) => {
  const messages = await db.Message.findAll()
  res.send(messages);
});

// Create a new message
messagesRouter.post("/", async (req, res) => {
  // TODO: Validate message format
  // TODO: {"text": <string>, "author": <string>}
  // message.id = data.messages.length + 1;
  // message.author = req.authUser.username;
  // data.messages.push(message);
  db.Message.create({ text: req.body.text, userId: req.authUser.id })
  res.status(201).end();
});

// Update a message with id <messageId>
messagesRouter.put("/:messageId", async (req, res) => {
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
});

messagesRouter.delete("/:messageId", (req, res) => {
  // TODO: remove message with id
});

module.exports = messagesRouter;
