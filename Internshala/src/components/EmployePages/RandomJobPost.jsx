import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { asyncloademploye, fetchJobDetails } from '../../store/userAction';


const RandomJobPost = () => {
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.user)
  // console.log(user)

  useEffect(() => {
    dispatch(asyncloademploye())
  }, [dispatch])

  useEffect(() => {
     // Fetch job details for each job reference
    if(user.user.jobs){
      user.user.jobs.forEach(jobId =>{
        dispatch(fetchJobDetails(jobId)) // Dispatch action to fetch job details
      })
    }
  }, [dispatch, user.user.jobs])
  
  
  return (
    <div className='mt-3 bg-red-200 '>
        <h2 className=' text-3xl text-center'>Jobs</h2>
        <div className='min-h-[30vh] w-full bg-fuchsia-200 mt-5 p-3'>
          {user.user.jobs && user.user.jobs.map((jobId, index) => {
            const jobDetails = user.jobDetails[jobId]
            // console.log(jobDetails)
            return (
              <div key={index}>
                {jobDetails && (
                 <div className='min-h-[20vh] lg:m-auto lg:mb-3 lg:w-[60vw] bg-[#F4F4F5] border-b border-black  mb-3 rounded-lg shadow-md flex flex-col items-start p-5'>
                  <h3 className='text-2xl font-semibold'>{}</h3>
                  <p className=''>Skills: {}</p>
                  <Link to={`/view-job/${jobId}`} className='px-4 py-2 mt-4  rounded-md bg-blue-500 text-white'>View/Edit Job</Link>
                 </div>
                )}
                
              </div>
            )
          })}
            
            
            
            
           
           
            
            
        </div>
    </div>
  )
}

export default RandomJobPost