import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'


export const checkUser = async (req, res) => {
    const token = req.cookies.Home2Work
    if (!token) {
        console.log('No token found')
        return res.status(401).json({ error: 'No token found' })
    }
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) return res.status(404).json({ message: 'UnAuthorized, Invalid Token' })

        try {
            const id = decoded.id
            const user = await User.findOne({ id })
            res.json({ user })

        } catch (err) {
            console.log('Error fetching userdata ', err.message)
        }
    })
}

export const allUsers = async (req, res)=>{
    try{
        const AllUsers = await User.find({
            _id:{$ne:req.params.id},
            userType: "designer"
        }).select([
            "email", "name", "_id"
        ])
        res.json(AllUsers)
    } catch(err){
        console.log('Error fetching all the users', err.message)
        res.json({err: 'Something Went wrong'})
    } 
}
