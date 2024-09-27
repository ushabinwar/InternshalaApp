import React, { useEffect, useState } from 'react'
import Navbar from '../Nav/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { asynloaduser } from '../../store/userAction'
import { toast } from 'react-toastify'

const Changepassword = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asynloaduser())
  }, [dispatch])
  
  const userId = useSelector((state) => state.user.user._id)
  // console.log(userId)
  
  const [fromData, setfromData] = useState({
    password : "",
    confirmPassword : ""
  })

  const changeHandler = (e)=>{
    setfromData({...fromData , [e.target.name] : e.target.value }, console.log(e.target.value))
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    if(fromData.password !== fromData.confirmPassword){
      toast.error("password does not match")
      return
    }
  }
  return (
    <>
    <div className=' min-h-screen w-full'>
        <Navbar/>
        <form onSubmit={submitHandler} className='  w-[75%] lg:w-1/4 m-auto mt-32'>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-bold mb-1">New Password</label>
              <input 
                type="password"
                id='password'
                name='password'
                value={FormData.password}
                onChange={changeHandler}
                required
                className=' appearance-none w-full border bg-gray-200 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='mt-4'>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-1">Confirm Password</label>
              <input 
                type="password"
                id='confirmpassword'
                name='password'
                value={FormData.confirmPassword}
                onChange={changeHandler}
                required
                className=' appearance-none w-full border bg-gray-200 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <button className=' bg-blue-500 px-3 py-2 rounded-md text-md font-semibold text-white mt-4 lg:mt-5'>
            Change Password
          </button>
          
          </form>
    </div>
    </>
   
  )
}

export default Changepassword
