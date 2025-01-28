import Messages from '../models/messageModel.js'

export const AddMsg = async (req, res) => {
    try{
        const {from, to, message} = req.body
        const data = await Messages.create({
            message: {text: message},
            users: [from, to],
            sender: from
        })
        if (data){
            return res.json({msg: "Message added successfully"})
        }
        return res.json({err: 'Failed to add data to db'})
    } catch (err){
        console.log('Something went wrong while adding msg \n', err)
        res.status(500).json({error: 'Something went wrong while adding msg to db'})
    }
}

export const AllMsg = async (req, res) => {
    try{
        const {from, to} = req.body
        const messages = await Messages.find({
            users: {
                $all: [from, to]
            }
        }).sort({updatedAt: 1})
        const projectMessages = messages.map((msg)=>{
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text
            }
        })
        res.json(projectMessages)
    } catch (err){
        console.log('Error fetching all the messages ', err.message)
        res.status(500).json({err: "Something went wrong while fetching all messages"})
    }
}