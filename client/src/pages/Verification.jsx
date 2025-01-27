import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loading from "../components/Loading"
import verificationSuccesful from '../assets/verificationSuccesful.gif'


const Verification = () => {
  const token = useParams()
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/verifiedUser`, token)
        if (response.status === 200){
          setVerified(true)
        }
      } catch (err) {
        console.log(err.message)
      }
    }
    verifyEmail()
  }, [])

  return (
    <>
    {
      verified ? 
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
        <div>
          <img src={verificationSuccesful} alt="Verified Successfully" />
        </div>
        <div className="text-lg xs:text-3xl font-semibold">Verified successfully</div>
        <div className="xs:text-2xl">You can now close this Window</div>
      </div>
      : 
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
        <div>
          <Loading />
        </div>
        <div className="gap-1 text-3xl text-center font-semibold">
        <div>Please Wait...</div>
        <div>Do not close this Window.</div>
        </div>
      </div>
      
    }
    </>
  )
}

export default Verification