import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { asyncloademploye, fetchInternshipDetails, fetchJobDetails } from '../../store/userAction';


const RandomInternshipPost = () => {
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.user)
  // console.log(user)

  useEffect(() => {
    dispatch(asyncloademploye())
  }, [dispatch])

  useEffect(() => {
     // Fetch internship details for each internship reference
    if(user.user.internships){
      user.user.internships.forEach(internshipId =>{
        dispatch(fetchInternshipDetails(internshipId)) // Dispatch action to fetch internship details
      })
    }
    // console.log("its running")
  }, [dispatch, user.user.internships])
  
  
  return (
    <div className='mt-3 bg-red-200 '>
        <h2 className=' text-3xl text-center'>Internship</h2>
        <div className='min-h-[30vh] w-full bg-fuchsia-200 mt-5 p-3'>
          {user.user.internships && user.user.internships.map((internshipId, index) => {
            const internshipDetails = user.internshipDetails[internshipId] 
            // console.log(internshipDetails)
            return (
              <div key={index}>
                {internshipDetails && (
                 <div className='min-h-[20vh] lg:m-auto lg:mb-3 lg:w-[60vw] bg-[#F4F4F5] border-b border-black  mb-3 rounded-lg shadow-md flex flex-col items-start p-5'>
                  <h3 className='text-2xl font-semibold'>{internshipDetails.internship.profile}</h3>
                  <p className=''>Skills: {internshipDetails.internship.skills} </p>
                  <Link to={`/view-internship/${internshipId}`} className='px-4 py-2 mt-4  rounded-md bg-blue-500 text-white'>View/Edit Internship</Link>
                 </div>
                )}
                
              </div>
            )
          })}
            
            
            
            
           
           
            
            
        </div>
    </div>
  )
}

export default RandomInternshipPost