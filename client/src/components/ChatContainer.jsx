import React, { useState, useEffect, useRef } from 'react'
import ChatInput from './ChatInput'
import axios from 'axios'
import { useUser } from '../context/userContext'
import { v4 as uuid } from 'uuid'
import { IoIosArrowBack } from "react-icons/io";

const ChatContainer = ({ data }) => {
    const { currentChat, socket, showChat, setShowChat } = data
    const { userData } = useUser()
    const [messages, setMessages] = useState([])
    const [arrivalMsg, setArrivalMsg] = useState(null)
    const [enlargedImage, setEnlargedImage] = useState(null)
    const scrollRef = useRef()

    const handleSendMsg = async (msg) => {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/messages/addMsg`, {
            from: userData._id,
            to: currentChat._id,
            message: msg
        })
        socket.current.emit("send-msg", {
            to: currentChat._id,
            from: userData._id,
            message: msg
        })

        const msgs = [...messages]
        msgs.push({
            fromSelf: true,
            message: msg
        })
        setMessages(msgs)
    }

    useEffect(() => {
        if (socket.current) {
            const handleMsgRecieve = (data) => {
                if (currentChat._id === data.from) {
                    setArrivalMsg({
                        fromSelf: false,
                        message: data.message
                    })
                }
            }
            socket.current.on("msg-recieve", handleMsgRecieve)

            return () => {
                socket.current.off("msg-recieve", handleMsgRecieve)
            }
        }
    }, [currentChat, socket])

    useEffect(() => {
        arrivalMsg && setMessages((prev) => [...prev, arrivalMsg])
    }, [arrivalMsg])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behaviour: "smooth" })
    }, [messages])

    const isImageUrl = (url) => {
        return /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(url);
    }

    const handleImageClick = (url) => {
        setEnlargedImage(url)
    }

    const closeEnlargedImage = () => {
        setEnlargedImage(null)
    }

    useEffect(() => {
        const fetchMsg = async () => {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/messages/allMsg`, {
                from: userData._id,
                to: currentChat._id
            })
            setMessages(response.data)
        }
        if (currentChat) {
            fetchMsg()
        }
    }, [currentChat])

    return (
        <>
            <div className='flex flex-col text-black px-5 py-5 md:py-0 h-full justify-between'>
                <div className='flex gap-5 items-center'>
                    {showChat && (
                        <div className='block md:hidden'>
                            <IoIosArrowBack className='text-2xl font-black' onClick={() => { setShowChat(false) }} />
                        </div>
                    )}
                    {/* <img src={`data:image/svg+xml;base64,${currentChat.avatarImage}`} alt="avatar" className='h-12' /> */}
                    <div className='text-lg'>{currentChat.name}</div>
                </div>
                <div className='px-2 h-[75vh] md:h-[80vh] overflow-auto scrollbar-dark-blue'>
                    <div className='py-5 min-h-full flex flex-col justify-end'>
                        {messages.map((msg) => {
                        
                            return (
                                <div ref={scrollRef} key={uuid()} className={`my-1 w-full flex ${msg.fromSelf ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`bg-slate-800 p-2 max-w-[80%] break-words break-all ${msg.fromSelf === true ? 'rounded-b-xl rounded-tl-xl' : 'rounded-b-xl rounded-tr-xl'}`}>
                                        {isImageUrl(msg.message) ? (
                                            <img
                                                src={msg.message}
                                                alt="message image"
                                                className="max-w-[200px] max-h-[200px] rounded-lg cursor-pointer"
                                                onClick={() => handleImageClick(msg.message)} 
                                            />
                                        ) : (
                                            msg.message 
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <ChatInput handleSendMsg={handleSendMsg} />
            </div>
            {enlargedImage && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeEnlargedImage}>
                    <img
                        src={enlargedImage}
                        alt="enlarged"
                        className="max-w-[90%] max-h-[90%] object-contain"
                    />
                </div>
            )}
        </>
    )
}

export default ChatContainer