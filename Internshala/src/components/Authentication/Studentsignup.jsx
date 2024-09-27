import React, { useEffect, useState } from 'react'
import Navbar from '../Nav/Navbar'
import {useDispatch, useSelector} from 'react-redux'
import {asyncsignup} from "../../store/userAction"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Studentsignup = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  console.log(user)
  const navigate = useNavigate()
  const [formData, setformData] = useState({
    firstname : "",
    lastname:"",
    contact:"",
    email:"",
    city:"",
    gender:"",
    password:"",
  })
  const [error, seterror] = useState(user.error)
  const [flag, setflag] = useState(0)

  const handleChange = (e)=>{
   setformData({...formData , [e.target.name]: e.target.value  })
  }

  const submitHandler = async (e) =>{
    e.preventDefault()
    await dispatch(asyncsignup(formData))
    seterror(user.error)
    console.log(error)
    setflag(1)
    // console.log("submited")
    // console.log(e)
    toast.success('Signup Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
      });
  }
  useEffect(() => {
    if(user.isAuthenticated){
      navigate("/student/dashboard")
    }
  }, [user.isAuthenticated, navigate])
  console.log(user)
  
  return (
    // <div className='min-h-screen w-full bg-red-400'>Studentsignup</div>
    <div className='w-full min-h-screen  flex flex-col '>
      <Navbar/>
      <div className='logincontainer py-4 my-8  px-8   lg:w-[45vw]  lg:m-auto   lg:py-10 lg:px-10  lg:border-1 lg:shadow lg:rounded-md  '>
        <h1 className='text-3xl font-semibold text-center mb-4 lg:text-left'>Create Student Account</h1>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className=' lg:flex lg:w-2/3 justify-between '>
          <input className='w-full py-2 px-2 bg-gray-200 border-2 rounded-md mt-2 lg:w-[49%] '
          type="text"
          placeholder='First Name'
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
          />
          <input className='w-full py-2 px-2 bg-gray-200 border-2 rounded-md mt-2 lg:w-[49%] '
          type="text"
          placeholder='Last Name'
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
          />
          </div>
          <input className='w-full py-2 px-2 bg-gray-200 border-2 rounded-md mt-2 '
          type="number"
          placeholder='Contact'
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          />
          <input className='w-full py-2 px-2 bg-gray-200 border-2 rounded-md mt-2 '
          type="text"
          placeholder='Email'
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          />
          <input className='w-full py-2 px-2 bg-gray-200 border-2 rounded-md mt-2 '
          type="text"
          placeholder='City'
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          />
         <div className='flex gap-2 items-center mt-3'>
         <input className=''
         type="radio" 
         name="gender"
         value = "Male"
         checked = {formData.gender === "Male"}
         onChange={handleChange}
         required
         />
        <label htmlFor="Male" className="mr-4">Male</label>
         
         <input
         type="radio" 
         name="gender"
         value = "Female"
         checked = {formData.gender === "Female"}
         onChange={handleChange}
         required
         />
         <label htmlFor="Female" className="mr-4">Female</label>
         
         <input 
         type="radio" 
         name="gender"
         value = "Other"
         checked = {formData.gender === "Other"}
         onChange={handleChange}
         required
         />
         <label htmlFor="Other">Other</label>
         </div>
         
         <input className='w-full  py-2 px-2 bg-gray-200 border-2 rounded-md mt-2 '
          type="password"
          placeholder='Password'
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          />
          <button className='w-full bg-blue-500 p-2 rounded-md text-lg font-semibold text-white mt-4'>
            Sign Up
          </button>
          
        </form>
        <span className='text-gray-700 block mt-5'>
          Already have an account? {" "}
          <Link to="/student/signin" className='text-blue-500'>Sign In</Link>
        </span>
    
      </div>                                            
    </div>
  )
}

export default Studentsignup

