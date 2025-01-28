import React, { useState, useEffect } from 'react'
// import Logout from './Logout'
import { useUser } from '../context/userContext'

const AllContacts = ({ contacts, handleChatChange }) => {
  const { userData, isLoading } = useUser()
  const [currentSelected, setCurrentSelected] = useState(undefined)
  const { name, avatarImage } = userData

  const changeCurrentChat = (index, contacts) => {
    setCurrentSelected(index)
    handleChatChange(contacts)
  }

  return (
    <div className='text-black bg-gray-100 py-5 lg:px-5 px-2 h-full flex flex-col gap-4 justify-between'>
      <div className='flex flex-col gap-3 h-full '>
          <div className='text-xl font-semibold'>Chat with Designers</div>
        <div className='flex flex-col gap-1 p-1 h-[73vh] md:h-[60vh] overflow-auto scrollbar-dark-blue'>
          {contacts.map((contact, index) => (
              <div key={index} className={`bg-gray-400 p-2 flex gap-5 items-center rounded-xl cursor-pointer ${currentSelected === index ? 'md:bg-gray-300' : ""}`} onClick={() => changeCurrentChat(index, contact)}>
                <div className='text-lg lg:text-xl'>{contact.name}</div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllContacts