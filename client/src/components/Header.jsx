import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Header = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try{
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`)
      toast.success('Logout Successful')
    } catch (err){
      console.log(err.message)
    }
  }
  return (
    <div>
      <header className="pb-6 bg-[#f6f6f6] lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link to={"/"} title="" className="font-bold text-black text-2xl">
                Home2Work
              </Link>
            </div>
            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

              <Link to={"/pricing"} title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </Link>
            </div>

            <Link to={'/login'}  className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-[#009689] border border-transparent rounded-md lg:inline-flex " > Get started now </Link>
          </nav>

          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
              </div>
            </div>
              <Link to={'/login'} className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#009689] border border-transparent rounded-md items-center"> Get started now </Link>
              </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
