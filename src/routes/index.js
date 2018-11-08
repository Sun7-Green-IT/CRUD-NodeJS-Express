import express from 'express'
import {
  hello
} from './hello'
import {
  users
} from './users'
const router = express.Router()

router.route('/').get(hello)
router.route('/users').get(users)

export default router