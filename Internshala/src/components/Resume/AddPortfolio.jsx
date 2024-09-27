import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addJob, addPortfolio, addProject, asynloaduser } from '../../store/userAction'
import { toast } from 'react-toastify'


const AddPortfolio = ({onClose}) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  // console.log(user)

  useEffect(() => {
    //fetch user details when component mount
    dispatch(asynloaduser())
  }, [dispatch])

  const [formData, setformData] = useState({
    blogLink:"",
    githubProfile:"",
    playStoreDevAccount:"",
    behancePortfolio:"",
    otherWorkSample:""

  })

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const submitHandler = async  (e)=>{
     e.preventDefault()
      // Handle form submission, e.g., dispatching an action to add the project
      try{
         await dispatch(addPortfolio(formData))
         onClose()
         toast.success("Portfolio added successfully")
     }catch(error){
         toast.error("Error adding Portfolio")
     }
  }
  

  return (
    
    <div className='px-3 py-5 lg:px-7 bg-gray-100  border shadow'>
        <h1 className='text-xl font-semibold text-center'>Add Portfolio</h1>
        <form action="">
            <div className='mt-2 lg:mt-4'>
               <label htmlFor="blogLink" className=' block text-sm font-medium text-gray-700'>
                 Blog Link
                </label>
               <input className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                  type="text" 
                  name='blogLink'
                  placeholder='Enter Blog Link'
                  value={formData.blogLink}
                  onChange={handleInputChange}
               />
            </div>
            <div className='mt-2 lg:mt-4'>
               <label htmlFor="githubProfile" className=' block text-sm font-medium text-gray-700'>
                 Github Profile
                </label>
               <input className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                  type="text" 
                  name='githubProfile'
                  placeholder='Enter Github Link'
                  value={formData.githubProfile}
                  onChange={handleInputChange}
               />
            </div>
            <div className='mt-2 lg:mt-4'>
               <label htmlFor="playStoreDevAccount" className=' block text-sm font-medium text-gray-700'>
                  Play Store Devloper Account
                </label>
               <input className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                  type="text" 
                  name='playStoreDevAccount'
                  placeholder='Enter Link'
                  value={formData.playStoreDevAccount}
                  onChange={handleInputChange}
               />
            </div>
            <div className='mt-2 lg:mt-4'>
               <label htmlFor="behancePortfolio" className=' block text-sm font-medium text-gray-700'>
                  Behance Portfolio
                </label>
               <input className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                  type="text" 
                  name='behancePortfolio'
                  placeholder='Enter Link'
                  value={formData.behancePortfolio}
                  onChange={handleInputChange}
               />
            </div>
            <div className='mt-2 lg:mt-4'>
               <label htmlFor="otherWorkSample" className=' block text-sm font-medium text-gray-700'>
                  Other Work Sample
                </label>
               <input className='mt-1 p-2 text-sm lg:text-base w-full border border-gray-300 rounded-md' 
                  type="text" 
                  name='otherWorkSample'
                  placeholder='Enter Link'
                  value={formData.otherWorkSample}
                  onChange={handleInputChange}
               />
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

export default AddPortfolio;