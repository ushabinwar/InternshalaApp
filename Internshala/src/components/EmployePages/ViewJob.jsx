import React, { useEffect, useState } from 'react'
import EmployeNav from '../Nav/EmployeNav'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { asyncloademploye, deleteJobPost, fetchJobDetails } from '../../store/userAction'
import EditJobPost from './EditJobPost'

const ViewJob = () => {
  const dispatch = useDispatch()
  const {jobId} = useParams()
  const jobDetails = useSelector((state)=> state.user.jobDetails[jobId])
  const [isEditing, setIsEditing] = useState(false)
  console.log(jobDetails)
  const user = useSelector((state)=>state.user)

  useEffect(() => {
    dispatch(asyncloademploye()) // Load employe details first
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchJobDetails(jobId))
  }, [dispatch. jobId])

  const handleEditClick = ()=>{
    setIsEditing(true)
  }
  const handleCloseEdit = ()=>{
    setIsEditing(false)
    
  }
 

  // const handleDeleteClick = async ()=>{
  //   if(window.confirm("Are you sure you want to delete this job post?")){
  //     // dispatch(deleteJobPost((jobId), () =>{
  //     //   window.location.href = "/employe/dashboard";
  //     //   toast.success('Job Post Deleted');

  //     // })).catch(error => {
  //     //   console.error("Error deleting job post:", error);
  //     // });
    
  //      await dispatch(deleteJobPost(jobId))
  //     window.location.href = "/employe/dashboard";
  //     toast.success('Job Post Deleted');
     

      
  //   }
  // }
  
  const handleDeleteClick = async () => {
    if (window.confirm("Are you sure you want to delete this job post?")) {
      try {
        dispatch(deleteJobPost(jobId))
        window.location.href = "/employe/dashboard";
        toast.success('Job Post Deleted');
      } catch (error) {
        console.error("Error deleting job post:", error);
        
      }
    }
  };
  
  

  return (
    <div className='min-h-screen w-full '>
        <EmployeNav/>
        {jobDetails && (
          <h2 className='text-3xl p-6 text-center font-semibold'>{jobDetails.job.title} ({jobDetails.job.jobtype})</h2>
        )}
        
        <div className='w-[95%] lg:w-[80%] m-auto min-h-screen lg:border-2 lg:rounded-md lg:p-10 p-2 '>
            <h2 className='font-semibold text-xl'>{jobDetails.job.title}</h2>
            <p className='mt-1'>jobtype {jobDetails.job.jobtype}</p>
            <p className='mt-1'>Location: {jobDetails.job.location}</p>
            <p className='mt-1'><span className=' font-semibold'>Salary:</span> {jobDetails.job.salary}/month</p>
            <p className='mt-1'><span className='font-semibold'>Skills:</span> <span className='text-sky-500'></span>{jobDetails.job.skills}</p>
            <p className='mt-1'><span className=' font-semibold'>Perks:</span> {jobDetails.job.perks} </p>
            <p className='mt-1'><span className='text-sky-500 font-semibold'>Openings:</span> {jobDetails.job.openings} </p>
            <p className='mt-5'><span className=' font-semibold'>Preferences:</span> {jobDetails.job.preferences} </p>
            <p className='mt-5'><span className=' font-semibold'>Responsibility:</span> {jobDetails.job.responsibility} </p>
            <p className='mt-5'><span className=' font-semibold'>Description:</span> {jobDetails.job.description} </p>
            <p className='mt-5'><span className=' font-semibold'>Assesments:</span> {jobDetails.job.assesments}</p>
            
          
           <div className='flex gap-2'>
           <button onClick={handleEditClick} className='bg-blue-500 text-white py-2 px-4 rounded-md mt-5 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
                Edit Job
            </button>
            <button onClick={handleDeleteClick} className='bg-red-500 text-white py-2 px-4 rounded-md mt-5 hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300'>
                Delete Job
            </button>
           </div>
           
            <h3 className="text-xl mt-5">Students Applied:</h3>
      </div>
      {isEditing && <EditJobPost onClose={handleCloseEdit}/>}
    </div>
  )
}

export default ViewJob