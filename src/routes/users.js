import {
  database,
  executeSql
} from '../utils/postgres'
import {
  recover
} from '../utils/recover'

export const users = (req, res) => {

  const reply = recover(
    executeSql(database, 'SELECT * FROM public."user"', []),
    rep => {
      res.send(rep)
    },
    err => {
      res.send(err)
    }
  )
}