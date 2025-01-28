import express from 'express'
import {checkUser, allUsers} from '../controllers/userController.js'

const router = express()

router.get('/checkUser', checkUser)
router.get('/allUsers/:id', allUsers)

export default router