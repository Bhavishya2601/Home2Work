import React from 'react'
import { useUser } from '../context/userContext'
// import robot from "../assets/robot.gif"

const Welcome = () => {
    const {userData} = useUser()
  return (
    <div className='text-white h-full w-full flex flex-col justify-center items-center font-sans gap-1'>
      {/* <img src={robot} className='h-96' alt="Welcome" /> */}
      <div className='text-2xl lg:text-4xl font-bold tracking-normal'>Select a designer to chat with him</div>
    </div>
  )
}

export default Welcome