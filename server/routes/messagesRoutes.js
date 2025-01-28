import express from 'express'
import { AllMsg, AddMsg } from '../controllers/messageController.js'

const router = express.Router()

router.post('/addMsg', AddMsg)
router.post('/allMsg', AllMsg)

export default router