import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {signout} from "../../store/userSlice"
import { asyncsignout} from '../../store/userAction'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const dispatch = useDispatch()
  const user =  useSelector((state)=> state.user)
  const [isMouseOpen, setisMouseOpen] = useState(false)
  // console.log(user)

  const handleMouseEnter = ()=>{
    setisMouseOpen(true)
  }
  const handleMouseLeave = ()=>{
    setisMouseOpen(false)
  }
  const signoutHandler = ()=>{
      // Dispatch the asyncsignout action when the "Sign Out" button is clicked
    dispatch(asyncsignout())
    toast.error("Please Login to Access")
  }
  
  
  return (
    <div className='navbar h-[13.5vh] w-full bg-gray-100  flex justify-between items-center px-3 lg:px-10'>
      <Link to='/student/dashboard'>
       <img className='w-40' src="https://upload.wikimedia.org/wikipedia/en/8/8b/Internshala_company_logo.png" alt="" />
      </Link>

     <div className='flex gap-8 items-center relative'>
      {user.isAuthenticated ?(
      <>
        <Link className='font-semibold text-lg'>Internships</Link>
        <Link className='font-semibold text-lg'>Jobs</Link>
        <Link className='font-semibold text-lg'>Saved</Link>

        {user.user && (
          <>
          <div className='h-12 w-12 bg-red-200 rounded-full overflow-hidden'
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
           <img className='w-full h-full object-cover' src= {`${user.user.avatar.url}`} alt="" />
          </div>
          {isMouseOpen && (
            <div className='menu h-[85vh] w-[33vw] py-8 px-6 bg-zinc-100 absolute right-[-4%]  top-11 shadow'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
              <div className='min-h-10 border-b-2 border-zinc-500 '>
                <h1 className='text-3xl font-md'>{user.user.firstname} {user.user.lastname}</h1>
                <h5 className='text-lg font-thin my-3'>{user.user.email}</h5>
              </div>
              <Link to="/resume" className='text-md flex mt-5 font-semibold text-blue-500  '>Edit Profile & Resume</Link>
              <Link to="/resume" className='text-md flex mt-3 font-semibold text-blue-500  '>My Applications</Link>
              <Link to="/resume" className='text-md flex mt-3 font-semibold text-blue-500  '>Saved Jobs & Internships</Link>
              <Link to="/change-password" className='text-md flex mt-3 font-semibold text-blue-500  '>Forget Password</Link>
           
            </div>
          )}
          <button onClick={signoutHandler} className='border hidden border-blue-500 bg-blue-500 text-white py-2 px-7 rounded lg:inline  text-lg font-semibold '>
           Sign Out 
          </button>
          </>
        )}
      
      
        
      </>)
      :(
      <>
      <Link to="/student/signin" className='border hidden  border-blue-500 py-2 px-5 rounded-md  text-lg font-semibold lg:inline '>
       Login
      </Link>
      <Link to="/student/signup" className='border hidden border-blue-500 bg-blue-500 text-white py-2 px-5 rounded lg:inline text-lg font-semibold '>
       Student Signup
      </Link>
      <Link  to="/employe/signup" className='border hidden border-blue-500 bg-blue-500 text-white py-2 px-5 rounded lg:inline  text-lg font-semibold '>
       Employe Signup 
      </Link>
      {/* <i className="ri-menu-3-line bg-red-500 p-3 text-black text-4xl"></i> */}
      {/* <i className="ri-menu-line bg-red-500"></i> */}
      <h1 className='lg:hidden'>menu</h1>

      </>
      )}
      
      
  
     </div>
    </div>
  )
}

export default Navbar