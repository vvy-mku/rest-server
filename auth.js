const express = require('express')
const data = require('./data');

const db = require('./db')

const authRouter = express.Router()

authRouter.post('/login', async (req, res) => {

  const user = await db.User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  })

  if (user) {
    res.cookie('userId', user.id, { signed: true })
    res.send({ result: 'ok' });
  } else {
    res.send({ result: 'fail' });
  }
})

authRouter.post('/registration', (req, res) => { })

module.exports = authRouter;