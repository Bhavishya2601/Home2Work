import express from 'express'
import {
    signUp, 
    checkSignUpStatus,
    verifiedUser, 
    login, 
    checkStatus,
    logout,
    allUsers,
} from '../controllers/authController.js'

const router = express.Router()

router.post('/signup', signUp)
router.post('/checkSignUpStatus', checkSignUpStatus)
router.post('/verifiedUser', verifiedUser)
router.post('/login', login)
router.post('/checkStatus', checkStatus)
router.get('/logout', logout)
router.get('/allUsers', allUsers)

export default router