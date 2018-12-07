import express from 'express'
import {
  config
} from './utils/config'
import routes from './routes/index'

export default function start() {
  const server = express()

  server.use('/', routes);

  server.listen(config.express.port, () => {
    console.log(config.express.port)
  })

  return server
}