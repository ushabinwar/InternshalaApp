import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSkill, asynloaduser } from '../../store/userAction'

const AddSkill = ({onClose}) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  // console.log(user)

  useEffect(() => {
    //fetch user details when component mount
    dispatch(asynloaduser())
  }, [dispatch])

  const [formData, setformData] = useState({
   
    skillName:"",
    proficiency:"",
   

  })

  const handleInputChange = (e) =>{
    // console.log(e)
    const {name, value} =  e.target
    setformData({...formData, [name]:value})
 
  }

  const submitHandler = async(e)=>{
     e.preventDefault()
      // Handle form submission, e.g., dispatching an action to add the training
        await dispatch(addSkill(formData));
        onClose();
      
  }
  
  return (
    
    <div className='px-3 py-5 lg:px-8 bg-white border shadow'>
        <h1 className='text-xl font-semibold text-center'>Add Skill</h1>
        <form action="">
          <div className='mt-4'>
            <label htmlFor="skillName" className='block text-sm font-medium text-gray-700'>
              Skill Name
            </label>
            <input className='mt-1 p-2 w-full text-sm lg:text-base border border-gray-300 rounded-md' 
              type="text"
              name='skillName'
              placeholder='Enter Skill Name'
              value={formData.skillName}
              onChange={handleInputChange}
           />
          </div>
          <div className='mt-4'>
            <label htmlFor="proficiency" className='block text-sm font-medium text-gray-700'>
              Proficiency
            </label>
            <select className='mt-1 p-2 w-full text-sm lg:text-base border border-gray-300 rounded-md' 
              name='proficiency'
              value={formData.proficiency}
              onChange={handleInputChange}
              >
                <option value="">Select Proficiency</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>

              </select>
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

export default AddSkill;