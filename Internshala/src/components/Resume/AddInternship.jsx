import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInternship, asynloaduser } from '../../store/userAction'

const AddInternship = ({onClose}) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  // console.log(user)

  useEffect(() => {
    //fetch user details when component mount
    dispatch(asynloaduser())
  }, [dispatch])

  const [formData, setformData] = useState({
   
    profile:"",
    organization:"",
    location:"",
    remoteOrOffice:"",
    startDate:"",
    endDate:"",
    description:"",
    type:"Internship"

  })

  const handleInputChange = (e) =>{
    // console.log(e)
    const {name, value} =  e.target
    setformData({...formData, [name]:value})
    // console.log(formData)
  }

  const submitHandler = async(e)=>{
     e.preventDefault()
      // Handle form submission, e.g., dispatching an action to add the internship
     await dispatch(addInternship(formData))
     console.log("Intership added", formData)
     // Close the form
     onClose()
  }


//   console.log(formData)
  

  return (
    
    <div className='px-3 py-5 lg:px-8 bg-gray-100 border shadow'>
        <h1 className='text-xl font-semibold text-center'>Add Internship</h1>
        <form action="">
            
            <div className='flex gap-4 lg:gap-20 mt-6 lg:mt-8'>
                <div>
                    <label htmlFor="profile" className='block text-sm font-medium text-gray-700'>
                        Profile
                    </label>
                    <input className='mt-1 p-2 w-full text-sm lg:text-base border border-gray-300 rounded-md' 
                      type="text"
                      name='profile'
                      placeholder='Enter Profile'
                      value={formData.profile}
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

            <div className=' flex gap-4 mt-3 lg:mt-3 lg:gap-20'>
                <div>
                    <label htmlFor="startDate" className='block text-sm font-medium text-gray-700'>
                        Start Date
                    </label>
                    <input className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                      type="text"
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
                      type="text"
                      name = "endDate"
                      placeholder='Enter End Date'
                      value={formData.endDate}
                      onChange={handleInputChange}
                     
                    />
                </div>
                
            </div>


            <div className='lg:flex gap-4 mt-3 lg:mt-3 lg:gap-20'>
                <div>
                    <label htmlFor="location" className='block text-sm font-medium text-gray-700'>
                        Location
                    </label>
                    <input className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                      type="text"
                      name = "location"
                      placeholder='Enter Location'
                      value={formData.location}
                      onChange={handleInputChange}
                      
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="remoteOrOffice" className='block text-sm font-medium text-gray-700'>
                      Remote or In Office
                      </label>
                    <div className='mt-1 flex gap-1 '>
                    <input 
                      className='' 
                      type="radio"
                      name = "remoteOrOffice"
                      value="In Office"
                      checked={formData.remoteOrOffice === "In Office"}
                      onChange={handleInputChange}
                     
                    />
                    <span className='mr-3'>In Office</span>
                    <input 
                      className='' 
                      type="radio"
                      name = "remoteOrOffice"
                      value="Remote"
                      checked={formData.remoteOrOffice === "Remote"}
                      onChange={handleInputChange}
                     
                    />
                    <span>Remote</span>
                    </div>
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
                Add 
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

export default AddInternship;