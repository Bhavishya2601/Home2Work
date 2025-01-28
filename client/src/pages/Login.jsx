import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import photo1 from '../assets/photo1.png'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useUser } from '../context/userContext.jsx'
import Header from '../components/Header.jsx'


const Login = () => {
  const navigate = useNavigate()
  const { userData, setReTrigger, isLoading } = useUser()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (!isLoading && userData && Object.entries(userData).length !== 0) {
      navigate('/dashboard')
    }
  })

  const handleLogin = handleSubmit(async ({ email, password }) => {
    setLoading(true)
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
        email, password
      }, {
        withCredentials: true
      })
      setReTrigger((prev) => prev + 1)
      if (response.status === 200) {
        toast.success('Login Successfully')
        navigate('/dashboard')
      }
    } catch (err) {
      console.log(err.message)
    } finally {
      setLoading(false)
    }
  })

  const handleGoogleLogin = async () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/user/google`
  }

  return (
    <>
    <Header />
    <div className='h-[calc(100vh-5rem)] flex gap-5'>
      <div className='w-1/2 flex justify-center items-center'>
        <img src={photo1} alt="login" className='h-full' />
      </div>
      <div className='w-1/2 flex flex-col gap-8 justify-center items-center font-manrope'>
        <div className='text-4xl font-bold text-center'>
          <div>Log in to continue your</div>
          <div>learning journey</div>
        </div>
        <div className='flex flex-col gap-4 w-full justify-center items-center'>

          <form onSubmit={handleLogin} className='flex flex-col gap-4 w-3/5'>
            <div className="relative">
              <input
                type="email"
                {...register("email", {
                  required: 'Email is required'
                })}
                className="peer w-full p-2 pt-6 pb-2 border-2 border-gray-300 bg-white rounded-md outline-none focus:border-purple-500 transition-all"
                placeholder=" "
              />
              <label
                className="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500 transition-all">
                Email
              </label>
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register("password", {
                  required: 'Password is required'
                })}
                className="peer w-full p-2 pt-6 pb-2 border-2 border-gray-300 bg-white rounded-md outline-none focus:border-purple-500 transition-all"
                placeholder=" "
              />
              <label
                className="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-500 transition-all">
                Password
              </label>
              <div className='absolute right-4 top-4 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl' />}
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <input
              type="submit"
              value="Log In"
              disabled={loading}
              className={`w-full px-2 py-3 text-lg bg-[#009689] text-white font-bold rounded-md transition-colors ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            />
          </form>
          <div>Don't have an Account? <Link to={'/signup'} className='text-[#009689] font-bold'>Signup</Link></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login