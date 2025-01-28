import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import photo1 from '../assets/photo1.png';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useUser } from '../context/userContext.jsx';
import Header from '../components/Header.jsx';

const Signup = () => {
  const navigate = useNavigate();
  const { userData, setReTrigger } = useUser();
  const intervalRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (userData && Object.entries(userData).length !== 0) {
      navigate('/dashboard');
    }
  }, [userData]);
  let verificationToastId;
  const CheckSignUpStatus = async (email) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/checkSignUpStatus`, { email }, {
        withCredentials: true
      });
      if (response.status === 200) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setReTrigger(prev => prev + 1);
        toast.success('Verification Successful', { id: verificationToastId });
        navigate('/dashboard');
        setLoading(false)
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return
      }
      setLoading(false)
      toast.error('Something Went Wrong');
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }
  const handleSignup = handleSubmit(async ({ name, email, password, userType }) => {
    setLoading(true)
    const loadingToastId = toast.loading('Sending Verification mail...');
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, {
        name, email, password, userType
      });
      if (response.status === 200) {
        toast.success('Verification mail sent successfully', { id: loadingToastId });
        verificationToastId = toast.loading('Verifing...\nDon\'t refresh or close this Window');
        try {
          intervalRef.current = setInterval(async () => {
            try {
              await CheckSignUpStatus(email);
            } catch (err) {
              console.log('Error inside interval:', err.message);
            }
          }, 5000);
        } catch (err) {
          toast.error('Something Went Wrong', { id: verificationToastId });
          setLoading(false)
        }
      }
    } catch (err) {
      toast.error('Something Went Wrong', { id: loadingToastId });
      setLoading(false)
    }
  });
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);
  return (
    <>
    <Header />  
    <div className='h-[calc(100vh-5rem)] flex justify-between mx-12 gap-5'>
      <div className='w-1/2 flex justify-center items-center'>
        <img src={photo1} alt="login" className='h-full' />
      </div>
      <div className='w-1/2 flex flex-col gap-8 justify-center items-center font-manrope '>
        <div className='text-3xl text-4xl font-bold'>Sign up and start learning</div>
        <form onSubmit={handleSignup} className='flex flex-col gap-4 w-3/5'>
          <div className="relative">
            <input
              type="text"
              {...register("name", { required: 'Full name is required' })}
              className="peer w-full p-2 pt-6 pb-2 border-2 border-gray-300 bg-white rounded-md outline-none focus:border-[#009689] transition-all"
              placeholder=" "
            />
            <label
              className="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#009689] transition-all">
              Full name
            </label>
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div className="relative">
            <input
              type="email"
              {...register("email", { 
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                  message: 'Please enter a valid email address',
                },
               })}
              className="peer w-full p-2 pt-6 pb-2 border-2 border-gray-300 bg-white rounded-md outline-none focus:border-[#009689] transition-all"
              placeholder=" "
            />
            <label
              className="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#009689] transition-all">
              Email
            </label>
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register("password", { 
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
                maxLength: {
                  value: 16,
                  message: 'Password cannot exceed 16 characters',
                },
              })}
              className="peer w-full p-2 pt-6 pb-2 border-2 border-gray-300 bg-white rounded-md outline-none focus:border-[#009689] transition-all"
              placeholder=" "
            />
            <label
              className="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#009689] transition-all">
              Password
            </label>
            <div className='absolute right-4 top-4 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl' />}
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <div className="relative">
              <select
                {...register("userType", { required: 'Please select a user type' })}
                className="peer w-full p-2 pt-6 pb-2 border-2 border-gray-300 bg-white rounded-md outline-none focus:border-[#009689] transition-all"
              >
                <option value="">Select user type</option>
                <option value="user">User</option>
                <option value="designer">Designer</option>
              </select>
              <label
                className="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#009689] transition-all">
                User Type
              </label>
              {errors.userType && <p className="text-red-500 text-sm">{errors.userType.message}</p>}
            </div>
          <input
            type="submit"
            value="Sign up"
            disabled={loading}
            className={`w-full px-2 py-3 text-lg bg-[#009689] text-white font-bold rounded-md transition-colors ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          />
        </form>
        <div>Already have an Account? <Link to={'/login'} className='text-[#009689] font-bold'>Login</Link></div>
      </div>
    </div>
    </>
  );
};

export default Signup