import express from 'express'
import {
  config
} from './utils/config'
import routes from './routes/index'
// const {
//   Pool,
//   Client
// } = require('pg')

// const connectionString = process.env.URI_PG


// const pool = new Pool({
//   connectionString: connectionString,
// })

export default function start() {
  const server = express()

  server.use('/', routes);

  server.listen(config.express.port, () => {
    console.log(config.express.port)
  })

  return server
}

// app.get('/', (req, res) => {
//   res.json('Hello World!')
// })


// app.get('/users', (req, res) => {
//   pool.query('SELECT * FROM users')
//     .then(rep => {
//       res.send(rep)
//     })
//     .catch(e => console.error(e.stack))
// })

// app.listen(process.env.PORT || 3000, () => {

// })