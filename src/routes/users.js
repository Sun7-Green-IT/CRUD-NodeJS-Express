import {
  database,
  executeSql
} from '../utils/postgres'
import {
  recover
} from '../utils/recover'

export const users = (req, res) => {
  const reply = recover(
    executeSql(database, 'SELECT * FROM users', []),
    res => res,
    err => {
      return err
    }
  )
  res.json(reply)
}