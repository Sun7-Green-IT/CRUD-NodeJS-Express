const express = require('express')
const app = express()
const {
  Pool,
  Client
} = require('pg')

const connectionString = process.env.URI_PG


const pool = new Pool({
  connectionString: connectionString,
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users')
    .then(rep => {
      console.log(rep)
      pool.end()
      res.send(rep)
    })
    .catch(e => console.error(e.stack))
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!')
})