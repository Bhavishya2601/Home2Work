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
        {/* <div className='flex gap-3 items-center'> */}
          {/* <img src="/logo.png" alt="Chatterix" className='h-12' /> */}
          <div className='text-xl font-semibold'>Chat with Designers</div>
        {/* </div> */}
        <div className='flex flex-col gap-1 p-1 h-[73vh] md:h-[60vh] overflow-auto scrollbar-dark-blue'>
          {contacts.map((contact, index) => (
              <div key={index} className={`bg-slate-700 p-2 flex gap-5 items-center rounded-xl cursor-pointer ${currentSelected === index ? 'md:bg-gray-300' : ""}`} onClick={() => changeCurrentChat(index, contact)}>
                {/* <div><img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="" className='h-12 lg:h-16' /></div> */}
                <div className='text-lg lg:text-xl'>{contact.name}</div>
              </div>
          ))}
        </div>
      </div>
      {/* <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center '>
          <img src={`data:image/svg+xml;base64,${userData.avatarImage}`} alt="avatar" className='h-12 lg:h-16' />
          <div>
            <div className='text-lg lg:text-xl'>{userData.name}</div>
            <div className='text-xs lg:text-sm'>{userData.email}</div>
          </div>
        </div>
        <div>
          <Logout />
        </div>
      </div> */}
    </div>
  )
}

export default AllContacts