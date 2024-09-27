import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  asynloaduser, updateTraining } from '../../store/userAction'
import { toast } from 'react-toastify'


const EditTraining = ({trainingData, onClose}) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  // console.log(user)

  useEffect(() => {
    //fetch user details when component mount
    dispatch(asynloaduser())
  }, [dispatch])

  const [formData, setformData] = useState({
   
    program:trainingData.program||"",
    organization:trainingData.organization||"",
    locationType:trainingData.locationType||"",
    startDate:trainingData.startDate||"",
    endDate:trainingData.endDate||"",
    description:trainingData.description||"",
    location:trainingData.location||"",

  })

  const handleInputChange = (e) =>{
    const {name, value} =  e.target
    setformData({...formData, [name]:value})
 
  }

  const submitHandler = async(e)=>{
     e.preventDefault()
      try {
        await dispatch(updateTraining(trainingData.id, formData));
        onClose();
        toast.success('Training or Course updated successfully');
      } catch (error) {
        toast.error('Error updating Training');
      }
     
  }
  
  
  return (
    
    <div className='px-3 py-5 lg:px-8 bg-gray-100 lg:border lg:shadow'>
        <h1 className='text-xl font-semibold text-center'>Edit Training</h1>
        <form action="">
            
            <div className='flex gap-4 lg:gap-20 mt-6 lg:mt-8'>
                <div>
                    <label htmlFor="profile" className='block text-sm font-medium text-gray-700'>
                        Training Program
                    </label>
                    <input className='mt-1 p-2 w-full text-sm lg:text-base border border-gray-300 rounded-md' 
                      type="text"
                      name='program'
                      placeholder='Enter Profile'
                      value={formData.program}
                      onChange={handleInputChange}
                      
                      
                    />
                </div>
                <div>
                    <label htmlFor="organization" className='block text-sm font-medium text-gray-700'>
                        Organization
                    </label>
                    <input className='mt-1 p-2 w-full text-sm lg:text-base border border-gray-300 rounded-md' 
                      type="text"
                      name='organization'
                      placeholder='Enter Organization'
                      value={formData.organization}
                      onChange={handleInputChange}
                      
                    />
                </div>
                
            </div>

            <div className='lg:flex flex gap-4 mt-3 lg:mt-3 lg:gap-20'>
                <div>
                    <label htmlFor="location" className='block text-sm font-medium text-gray-700'>
                        Online or Location
                    </label>
                    <select className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                      name="locationType"
                      value={formData.locationType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Location Type</option>
                      <option value="Online">Online</option>
                      <option value="Location">Location</option>
                    </select>
                </div>
                {formData.locationType === "Location" && (
                  <div>
                    <label htmlFor="location" className='block text-sm font-medium text-gray-700'>
                       Location
                    </label>
                    <input
                      type='text'
                      name='location'
                      value={formData.location}
                      onChange={handleInputChange}
                      className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md'
                      placeholder='Enter location'
                   />
                  </div>
                )}
             
                
            </div>

            <div className=' flex gap-4 mt-3 lg:mt-3 lg:gap-20'>
                <div>
                    <label htmlFor="startDate" className='block text-sm font-medium text-gray-700'>
                        Start Date
                    </label>
                    <input className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                      type="date"
                      name = "startDate"
                      placeholder='Enter Start Date'
                      value={formData.startDate}
                      onChange={handleInputChange}
                      
                    />
                </div>
                <div>
                    <label htmlFor="endDate" className='block text-sm font-medium text-gray-700'>
                      End Date
                    </label>
                    <input className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                      type="date"
                      name = "endDate"
                      placeholder='Enter End Date'
                      value={formData.endDate}
                      onChange={handleInputChange}
                     
                    />
                </div>
                
            </div>
            <div className='mt-3 lg:mt-3'>
               <label htmlFor="description" className=' block text-sm font-medium text-gray-700'>
                 Description
                </label>
               <textarea className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                  type="text" 
                  name="description"
                  placeholder='Enter Description'
                  value={formData.description}
                  onChange={handleInputChange}
                  >
                </textarea>
                
            </div>
            <div className="mt-6 flex gap-5">
               <button 
               onClick={submitHandler}
               type='button'
               className='bg-blue-400 px-6 py-2 text-white font-semibold rounded-md  hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
                Save Changes
               </button>
               <button 
               type='button'
               onClick={onClose}
               className='bg-gray-400 px-6 py-2 text-white font-semibold rounded-md  hover:bg-gray-500 focus:outline-none focus:ring focus:border-gray-300'>
                 Cancle
               </button>
               
               
            </div>
        </form>
    </div>
   
  )
}

export default EditTraining;