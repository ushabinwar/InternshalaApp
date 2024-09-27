import React, { useEffect, useState } from 'react'
import EmployeNav from '../Nav/EmployeNav'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { asyncloademploye, deleteJobPost, fetchInternshipDetails, fetchJobDetails } from '../../store/userAction'
import EditInterrnshipPost from './EditInterrnshipPost'

const ViewInternship = () => {
  const dispatch = useDispatch()
  const {internshipId} = useParams()
  const internshipDetails = useSelector((state)=> state.user.internshipDetails[internshipId])
  const [isEditing, setIsEditing] = useState(false)
  console.log(internshipDetails)
  const user = useSelector((state)=>state.user)

  useEffect(() => {
    dispatch(asyncloademploye()) // Load employe details first
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchInternshipDetails(internshipId))
  }, [dispatch, internshipId])

  const handleEditClick = ()=>{
    setIsEditing(true)
  }
  const handleCloseEdit = ()=>{
    setIsEditing(false)
  }

//   const handleDeleteClick = ()=>{
//     if(window.confirm("Are you sure you want to delete this job post?")){
//       dispatch(deleteJobPost((jobId), () =>{
//         window.location.href = "/employe/dashboard";
//         toast.success('Job Post Deleted');

//       })).catch(error => {
//         console.error("Error deleting job post:", error);
//       });
      
//     }
//   }
  
  

  return (
    <div className='min-h-screen w-full '>
        <EmployeNav/>
        {internshipDetails && (
          <h2 className='text-3xl p-6 text-center font-semibold'>{internshipDetails.internship.profile} ({internshipDetails.internship.internshiptype})</h2>
        )}
        
        <div className='w-[95%] lg:w-[80%] m-auto min-h-screen lg:border-2 lg:rounded-md lg:p-10 p-2 '>
            <h2 className='font-semibold text-xl'>{internshipDetails.internship.profile}</h2>
            <p className='mt-1'>internshiptype {internshipDetails.internship.internshiptype}</p>
            <p className='mt-1'>Location: {internshipDetails.internship.location}</p>
            <p className='mt-1'><span className=' font-semibold'>Salary:</span> {internshipDetails.internship.salary}/month</p>
            <p className='mt-1'><span className='font-semibold'>Skills:</span> <span className='text-sky-500'></span>{internshipDetails.internship.skills}</p>
            <p className='mt-1'><span className=' font-semibold'>Perks:</span> {internshipDetails.internship.perks} </p>
            <p className='mt-1'><span className='text-sky-500 font-semibold'>Openings:</span> {internshipDetails.internship.openings} </p>
            <p className='mt-5'><span className=' font-semibold'>Preferences:</span> {internshipDetails.internship.preferences} </p>
            <p className='mt-5'><span className=' font-semibold'>Responsibility:</span> {internshipDetails.internship.responsibility} </p>
            <p className='mt-5'><span className=' font-semibold'>Description:</span> {internshipDetails.internship.description} </p>
            <p className='mt-5'><span className=' font-semibold'>Assesments:</span> {internshipDetails.internship.assesments}</p>
            
          
           <div className='flex gap-2'>
           <button onClick={handleEditClick} className='bg-blue-500 text-white py-2 px-4 rounded-md mt-5 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
                Edit Internship
            </button>
            <button  className='bg-red-500 text-white py-2 px-4 rounded-md mt-5 hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300'>
                Delete Internship
            </button>
           </div>
           
            <h3 className="text-xl mt-5">Students Applied:</h3>
      </div>
      {isEditing && <EditInterrnshipPost onClose={handleCloseEdit}/>}
    </div>
  )
}

export default ViewInternship