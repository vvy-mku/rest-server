const express = require('express')
const data = require('./data');

const authRouter = express.Router()

authRouter.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const user = data.users.find(function(elem) {
    return elem.username == username && elem.password == password
  });

  if (user) {
    res.cookie('userId', user.id)
    res.send({ result: 'ok' });
  } else {
    res.send({ result: 'fail' });
  }
})

authRouter.post('/registration', (req, res) => { })

module.exports = authRouter;