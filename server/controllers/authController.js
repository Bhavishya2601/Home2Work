import crypto from "crypto"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import verificationLinkTemplate from "../mailTemplates/verificationLink.js"
import mailSender from "../utils/mailSender.js"
import PendingVerification from "../models/PendingVerification.js"
import User from "../models/userModel.js"

const salt_rounds = process.env.SALT_ROUNDS || '10'

const generateToken = (user) => {
    return jwt.sign({
        id: user.id, email: user.email
    },
        process.env.JWT_SECRET || 'Home2Work',
        {
            expiresIn: '1d'
        })
}


export const signUp = async (req, res) => {  // signup
    const { name, email, password, userType } = req.body

    const existingUser = await PendingVerification.findOne({ email })
    if (existingUser) {
        await PendingVerification.deleteOne({ email })
    }

    const user = await User.findOne({ email })
    if (user) {
        console.log('User already exists')
        res.status(400).json({ message: "User already Exists" })
        return
    }

    const token = crypto.randomBytes(32).toString('hex')
    const hashedPassword = await bcrypt.hash(password, parseInt(salt_rounds))
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000)

    const pendingVerification = new PendingVerification({
        name,
        email,
        password: hashedPassword,
        userType,
        token,
        expiresAt
    })
    await pendingVerification.save()

    try {
        let link = `${process.env.FRONTEND_URL}/verify/${token}`
        let htmlContent = verificationLinkTemplate(link)
        await mailSender(email, 'Home2Work - Confirm Your Email Address', htmlContent)
        res.status(200).json({ message: 'Email send Successfully' })
        return
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' })
        return
    }
}

export const checkSignUpStatus = async (req, res) => {
    const { email } = req.body
    try {
        const user = await User.findOne({ email })
        if (user) {
            const id = user._id.toString()
            const cookie = generateToken({ id: id, email: user.email });
            res.cookie('Home2Work', cookie, {
                httpOnly: true,
                secure: true,
                maxAge: 24 * 60 * 60 * 1000,
                sameSite: 'none'
            })

            res.status(200).json({ message: 'Successfully Signed Up' })
            return
        }
        res.status(404).json({ error: 'User not found' })
        return
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ error: 'Something went wrong' })
        return
    }
}

export const verifiedUser = async (req, res) => { // for verification through mail
    const { token } = req.body
    try {

        if (!token) {
            res.status(400).json({ error: "No token found" })
            return
        }

        const pendingVerification = await PendingVerification.findOne({ token })
        if (!pendingVerification) {
            res.status(400).json({ error: "Invalid or expired Token" })
            return
        }
        const { name, email, password, userType, expiresAt } = pendingVerification

        if (expiresAt < new Date()) {
            await pendingVerification.deleteOne({ token })
            res.status(404).json({ error: "Token expired" })
            return
        }

        const newUser = new User({
            provider: "local",
            name,
            email,
            password,
            userType
        })
        console.log('saved user')
        await newUser.save()

        const savedUser = await User.findById   (newUser._id);
        if (!savedUser) {
            res.status(500).json({ error: "Failed to fetch user after saving" });
            return;
        }

        await pendingVerification.deleteOne({ token })

        return res.status(200).json({
            message: "Email verified successfully",
            user: savedUser
        })
    
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({ message: "Something went wrong" })
        
    }
}

export const login = async (req, res) => { // login
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ error: "user doesn't exist" })
            return
        }

        const match = await bcrypt.compare(password, user.password)
        if (match) {
            const cookie = generateToken({ id: user._id, email: user.email })
            res.cookie('Home2Work', cookie, {
                httpOnly: true,
                secure: true,
                maxAge: 24 * 60 * 60 * 1000,
                sameSite: 'none'
            })
            res.status(200).json({ message: "Email Verified Successfully" })
            return
        }
        res.status(400).json({ message: 'Wrong Password' })
        return

    } catch (err) {
        console.log(err.message)
    }
}

export const checkStatus = async (req, res) => { // used in userContext to check if user is logged in or not
    const token = req.cookies.Home2Work;

    if (!token) {
        console.log("No token found");
        res.status(400).json({ error: "No token found" });
        return;
    }

    jwt.verify(
        token,
        process.env.JWT_SECRET || "Home2Work",
        async (err, decoded) => {
            if (err) {
                res.status(400).json({ error: "Invalid token" });
                return;
            }

            if (!decoded) {
                res.status(400).json({ error: "Token decoding failed" });
                return;
            }

            const { id } = decoded;

            try {
                const user = await User.findById(id);
                if (!user) {
                    res.status(404).json({ error: "User not found" });
                    return;
                }
                res.json({ user });
            } catch (error) {
                console.log("Error fetching user data:", error.message);
                res.status(500).json({ error: "Something went wrong" });
            }
        }
    );
};

export const logout = async (req, res) => { // logout
    console.log('hello')
    res.clearCookie('Home2Work')
    res.status(200).json({ message: 'Logged out successfully' })
}

export const allUsers = async (req, res) => { // get all users
    try {
        const users = await User.find()
        res.status(200).json({ users })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong' })
    }
}
