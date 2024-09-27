import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloademploye, loadEmployeDetails } from '../../store/userAction'
import EmployeNav from '../Nav/EmployeNav'
import AddJobPost from '../EmployePages/AddJobPost'
import AddInternshipPost from '../EmployePages/AddInternshipPost'
import RandomJobPost from '../EmployePages/RandomJobPost'
import RandomInternshipPost from '../EmployePages/RandomInternshipPost'

const Employedash = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [showJobPost, setshowJobPost] = useState(false)
  const [showInternshipPost, setshowInternshipPost] = useState(false)
  console.log(user)

  useEffect(() => {
    //fetch user deatils when components mounts
    console.log("useEffect executed");
  dispatch(asyncloademploye())
  // console.log("updated")
    
    
  }, [dispatch])
  
  if(!user || !user.isAuthenticated){
    return <h2>Please log in to see your details.</h2>
  }
  if(!user.user){
    return <h2>Loading user details.....</h2>
  }

  const handleJobPostButtonClick = ()=>{
    setshowJobPost(true)
    setshowInternshipPost(false)
  }
  
  const handleInternshipPostButtonClick = ()=>{
    setshowInternshipPost(true) 
    setshowJobPost(false)
  }

  return (
    <>
    <EmployeNav/>
    <div className='w-full min-h-screen '>
      <div className=' h-40x-col justify-center'>
        <h2 className='text-center text-1xl font-semibold mt-1 '>Employee Dash</h2>
        <h1 className='text-4xl font-bold text-center pt-5 '>Hii {user.user.firstname} !👋  </h1>
        <div className='flex justify-center gap-5 lg:gap-20 h-[17vh] items-center'>
          <button onClick={handleJobPostButtonClick}  className='bg-blue-500 px-4 text-white font-semibold py-3 rounded-md'>Post Job</button>
          <button  onClick={handleInternshipPostButtonClick} className='bg-blue-500 px-4 text-white font-semibold py-3 rounded-md'>Post Internship</button>
        </div>
        {showJobPost && <AddJobPost onClose = {()=>setshowJobPost(false)}/>}
        {showInternshipPost && <AddInternshipPost onClose = {()=>setshowInternshipPost(false)}/>}
      </div>
      <RandomJobPost/>
      <RandomInternshipPost/>
       
      
    </div>
    </>
  )
}

export default Employedash