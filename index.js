const cookieParser = require('cookie-parser');
const express = require('express')
const messagesRouter = require('./messages')
const authRouter = require('./auth')

const app = express()
const port = 3000

app.use(express.json())
app.use(cookieParser())

app.use('/messages', messagesRouter)
app.use(authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})