import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addJob, addProject, asynloaduser, updateProject } from '../../store/userAction'
import { toast } from 'react-toastify'

const EditProject = ({projectData,onClose}) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  // console.log(user)

  useEffect(() => {
    //fetch user details when component mount
    dispatch(asynloaduser())
  }, [dispatch])

  const [formData, setformData] = useState({
    title:projectData.title||"",
    startDate:projectData.startDate||"",
    endDate:projectData.endDate||"",
    present:projectData.present||"",
    description:projectData.description||"",
    projectLink:projectData.projectLink||"",

  })

  const handleInputChange = (e) =>{
    const {name, value, checked, type} =  e.target
    const val = type ==="checkbox" ? checked : value
    setformData({...formData, [name]:val})
   
  }

  const submitHandler = async  (e)=>{
     e.preventDefault()
     try{
       await dispatch(updateProject(projectData.id, formData))
       onClose()
       toast.success("Project Updating Successfully")
     }catch(error){
      toast.error("Error Updating Project")
     }
  }
  

  return (
    
    <div className='px-1 py-5 lg:px-7   bg-gray-100  lg:border lg:shadow'>
        <h1 className='text-xl font-semibold text-center'>Add Project</h1>
        <form action="">
            <div className='mt-2 lg:mt-4'>
               <label htmlFor="title" className=' block text-sm font-medium text-gray-700'>
                 Title
                </label>
               <input className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                  type="text" 
                  name='title'
                  placeholder='Enter Tittle'
                  value={formData.title}
                  onChange={handleInputChange}
               />
            </div>
            <div className=' bg-red-600 lg:flex lg:gap-10 items-center mt-2 lg:mt-5 '>
              <div className='flex gap-4  lg:gap-20 bg-red-100'>
              <div>
                    <label htmlFor="startDate" className='block text-sm font-medium text-gray-700'>
                        Start Date
                    </label>
                    <input className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                      type="date"
                      name = "startDate"
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
                      value={formData.endDate}
                      onChange={handleInputChange}
                      disabled={formData.present}
                     
                    />
                </div>
              </div>
              <div className='  '>
                    <label htmlFor="present" className=' text-sm font-medium text-gray-700'>
                      Present
                    </label>
                    <input className='mt-1 p-2  text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                      type="checkbox"
                      name = "present"
                      checked={formData.present}
                      onChange={handleInputChange}
                     
                    />
              </div>
                
                
            </div>
            <div className='mt-2 lg:mt-4'>
               <label htmlFor="description" className=' block text-sm font-medium text-gray-700'>
                 Description
                </label>
               <textarea className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                  type="text" 
                  rows="4"
                  name="description"
                  placeholder='Enter Description'
                  value={formData.description}
                  onChange={handleInputChange}
                  >
                </textarea>
                
            </div>
            <div className='mt-2 lg:mt-3'>
               <label htmlFor="projectLink" className=' block text-sm font-medium text-gray-700'>
                 Project Link
                </label>
               <input className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                  type="text" 
                  name='projectLink'
                  placeholder='Enter Project Link'
                  value={formData.projectLink}
                  onChange={handleInputChange}
               />
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

export default EditProject;