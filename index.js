const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

const userDB = {}

app.get('/', (request, response) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})