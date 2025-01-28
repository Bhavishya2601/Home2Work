import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/userContext'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { io } from 'socket.io-client'

import AllContacts from '../components/AllContacts'
import Welcome from '../components/Welcome'
import ChatContainer from '../components/ChatContainer'

const Chat = () => {
  const navigate = useNavigate()
  const socket = useRef()
  const { userData, isLoading } = useUser()
  const [contacts, setContacts] = useState([])
  const [currentChat, setCurrentChat] = useState(undefined)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    if (Object.entries(userData).length === 0 && !isLoading) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    if (userData && !isLoading) {
      if (userData) {
        fetchContacts()
      }
    }
  }, [userData, isLoading])

  useEffect(() => {
    if (userData) {
      socket.current = io(`${import.meta.env.VITE_BACKEND_URL}`, {
        transports: ['websocket'],
        withCredentials: true
      })
      socket.current.emit("add-user", userData._id)
    }
  }, [userData])

  const fetchContacts = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/allUsers/${userData._id}`)
    setContacts(response.data)
  }

  useEffect(() => {
    if (!isLoading && Object.entries(userData).length === 0) {
      navigate('/')
    }
  }, [userData, isLoading])

  const handleChatChange = (chat) => {
    setCurrentChat(chat)
    setShowChat(true)
  }

  return (
    <div>
      <div className='md:px-5 xl:px-16 md:py-10 h-screen flex font-manrope tracking-wide'>
        <div className={`min-w-[300px] w-full md:w-2/5 xl:w-[30%] ${showChat ? 'hidden md:block' : 'block'}`}>
          <AllContacts contacts={contacts} handleChatChange={handleChatChange} />
        </div>
        <div className={`${showChat ? 'block' : 'hidden'} w-full md:block md:w-3/5 xl:w-[70%]`}>
          {
            currentChat === undefined ?
              <Welcome /> :
              <ChatContainer data={{currentChat, socket, showChat, setShowChat}} />
          }
        </div>
      </div>
    </div>
  )
}

export default Chat