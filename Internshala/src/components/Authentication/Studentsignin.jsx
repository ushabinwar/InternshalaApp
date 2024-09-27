import React, { useEffect, useState } from 'react'
import Navbar from '../Nav/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncsignin } from '../../store/userAction'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Studentsignin = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  console.log(user)
  const navigate = useNavigate()
  const [error, seterror] = useState(user.error)
  const [flag, setflag] = useState(0)

  const submitHandler = async (e)=>{
    e.preventDefault()
    // console.log(e)
    await dispatch(asyncsignin({
      email : e.target[0].value,
      password : e.target[1].value
    }))
    seterror(user.error)
    setflag(1)
    toast.success("Student Successfully Signin")
  }
 
  useEffect(() => {
    if(user.isAuthenticated){
      navigate("/student/dashboard")
    }
  }, [user.isAuthenticated, navigate])

  useEffect(() => {
    if(flag){
      console.log(user)
      console.log(user.error)
      if(user.error !== "Can not access the resources"){
        toast.error(user.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          // transition: Bounce,
          });
      }
    }
   
    
  }, [flag, user.error])
  
  

  return (
    <div className='w-full min-h-screen flex flex-col '>
      <Navbar/>
      <div className='logincontainer py-4 mt-20 px-8  lg:w-[30vw]  lg:m-auto lg:mt-24  lg:py-10  lg:border-2 lg:shadow lg:rounded-md  '>
        <h1 className='text-3xl font-semibold text-center mb-4 lg:text-left'>Student Login</h1>
        <form onSubmit={(e)=>{submitHandler(e)}}>
          <input className='w-full py-2 px-2 bg-gray-200 border-2 rounded-md mt-3 '
          type="text"
          placeholder='Email'
          name="email"
          />
          <input className='w-full  py-2 px-2 bg-gray-200 border-2 rounded-md mt-3 '
          type="password"
          placeholder='Password'
          name="password"
          />
          <button className='w-full bg-blue-500 p-2 rounded-md text-lg font-semibold text-white mt-4'>
            Login
          </button>
          
        </form>
        <span className='text-gray-700 block mt-3'>
          Don't have an account? {" "}
          <Link to="/student/signup" className='text-blue-500'>Sign Up</Link>
        </span>
        <span className=' mt-2 block'>
          <Link to="" className='text-blue-500 '>Forget Password</Link>
        </span>
      </div>                                            
    </div>
  )
}

export default Studentsignin;