import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    provider: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    userType: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const User = mongoose.model('User', userSchema)
export default User