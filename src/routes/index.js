import express from 'express'
import {
  hello
} from './hello'
import {
  users
} from './users'
import {
  fibonnaci
} from './fibonnaci';
const router = express.Router()

router.route('/').get(hello)
router.route('/users').get(users)
router.route('/fibonnaci/:number').get(fibonnaci)

export default router