import React, { useEffect, useState } from 'react'
import Navbar from '../Nav/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncemployesignup } from '../../store/userAction'
import { toast } from 'react-toastify'


const Employesignup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  console.log(user)
  const [error, seterror] = useState(user.error)
  const [flag, setflag] = useState(0)

  const [formData, setformData] = useState({
    firstname : "",
    lastname:"",
    contact:"",
    email:"",
    organizationname:"",
    password:"",
  })

  const handleChange = (e)=>{
    setformData({...formData , [e.target.name]: e.target.value  })
   }

  // const subbmitHandler = async (e)=>{
  //   e.preventDefault()
  //   // console.log(e)
  //   await dispatch(asyncemployesignup({
  //     firstname : e.target[0].value,
  //     lastname : e.target[1].value,
  //     contact: e.target[2].value,
  //     email : e.target[3].value,
  //     organizationname : e.target[4].value,
  //     password: e.target[5].value,
  //   }))
  //   seterror(user.error)
  //   console.log(error)
    
  // }
  const submitHandler = async (e) =>{
    e.preventDefault()
    await dispatch(asyncemployesignup(formData))
    seterror(user.error)
    // console.log(error)
    setflag(1)
    console.log("segnup sucessfully")
  }

  useEffect(() => {
    if(user.isAuthenticated){
      navigate("/employe/dashboard")
    }
  }, [user.isAuthenticated, navigate])
  console.log(formData)

  return (
    <div className='min-h-screen w-full'>
      <Navbar/>

      <div className='w-full  px-8 py-8  lg:flex lg:justify-between lg:p-20'>
        <div className=' '>
        <h1 className='text-6xl font-bold'>Hire Intern & Freshers <span className='text-blue-500'>Faster</span></h1>
        <h4 className='text-[3.5vh] mt-4'>Post Internship for Free Now</h4>
        </div>
        <div className='mt-10  lg:w-[50%]'>
          <h1 className='text-2xl font-bold mb-2'>Create Account</h1>
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
          placeholder=' Organization Name'
          name="organizationname"
          value={formData.organizationname}
          onChange={handleChange}
          required
          />
         
         <input className='w-full  py-2 px-2 bg-gray-200 border-2 rounded-md mt-2 '
          type="password"
          placeholder='Password'
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
          <button className='w-full bg-blue-500 p-2 rounded-md text-lg font-semibold text-white mt-4'>
            Sign Up
          </button> 
          <span className='text-gray-700 block mt-3'>
           Already have an account? {" "}
          <Link to="/employe/signin" className='text-blue-500'>Sign Up</Link>
          </span>
          
        </form>
        </div>
      </div>
    </div>
  )
}

export default Employesignup