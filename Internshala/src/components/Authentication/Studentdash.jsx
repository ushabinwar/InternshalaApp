import React, { useEffect } from 'react'
import Navbar from "../Nav/Navbar"
import { useDispatch, useSelector } from 'react-redux'
import { loadUserDetails } from '../../store/userAction'

const Studentdesh = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  console.log(user)
  useEffect(() => {
    // Fetch user details and random jobs/internships when the component mounts
    dispatch(loadUserDetails())
    
  }, [dispatch])
  
  return (
    <div>
      <Navbar/>
      <div>
      <div className="min-h-screen w-full ">
        {user.user ? (
          <div className=' h-40x-col justify-center'>
          <h1 className='text-4xl font-bold text-center mt-5'>Hii {user.user.firstname}!👋 </h1>
          <p className='text-center text-2xl  mt-5'>Let’s help you land your dream career</p>
        </div>
        ):(
          <p className="text-center text-2xl mt-5">Loading...</p>
        )}
      </div>
     


      </div>
    </div>
  )
}

export default Studentdesh