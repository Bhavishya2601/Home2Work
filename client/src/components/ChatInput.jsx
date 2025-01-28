import React, { useEffect, useRef, useState } from 'react'
import Picker from 'emoji-picker-react'
import { FaSmile } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { GrFormAttachment } from "react-icons/gr";

const ChatInput = ({ handleSendMsg }) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [msg, setMsg] = useState('')
    const [file, setFile] = useState(null)
    const [imageUrl, setImageUrl] = useState('')
    const pickerRef = useRef(null)
    const inputContainerRef = useRef(null)
    const fileInputRef = useRef(null)

    const handleEmojiClick = (emoji) => {
        let message = msg;
        message += emoji.emoji;
        setMsg(message)
    }

    const sendChat = (event) => {
        event.preventDefault()
        if (msg.length > 0 || imageUrl) {
            handleSendMsg(msg, imageUrl)
            setMsg('')
            setImageUrl('')
        }
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile){
            uploadToCloudinary(selectedFile)
        }
    }

    const uploadToCloudinary = (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'Home2Work'); 

        fetch('https://api.cloudinary.com/v1_1/dxmowzzi3/image/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                setImageUrl(data.secure_url); 
                console.log(data.secure_url)

                handleSendMsg(data.secure_url)
                setImageUrl('')
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (pickerRef.current && !pickerRef.current.contains(e.target) && inputContainerRef.current && !inputContainerRef.current.contains(e.target)) {
                setShowEmojiPicker(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            {showEmojiPicker && (
                <div ref={pickerRef} className='z-10 absolute bottom-24'>
                    <Picker onEmojiClick={handleEmojiClick} />
                </div>
            )}
            <div ref={inputContainerRef} className='flex gap-2 items-center'>
                <div onClick={() => { setShowEmojiPicker(prev => !prev) }}>
                    <FaSmile className='text-[#f2b830] text-3xl cursor-pointer' />
                </div>
                <form className='flex gap-2 w-full items-center bg-gray-300 rounded-lg' onSubmit={(e) => sendChat(e)}>
                    <input type="text" className='rounded-lg w-full bg-gray-300 py-2 px-2 outline-none text-black' placeholder='Type a message' value={msg} onChange={(e) => setMsg(e.target.value)} />
                    <div onClick={()=>fileInputRef.current.click()}><GrFormAttachment className='text-black text-3xl cursor-pointer' /></div>
                    <input type="file"
                    ref={fileInputRef}
                    className='hidden'
                    onChange={handleFileChange}
                    accept="image/*" />
                    <button type='submit' className='px-8 rounded-xl bg-[#9086f5] py-2'><IoSend className='text-xl text-black' /></button>
                </form>
            </div>
        </>
    )
}

export default ChatInput