import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEducation, asynloaduser } from '../../store/userAction'


const AddSecondaryForm = ({onClose, type}) => {
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.user) 
    // console.log(user)
    
  
    useEffect(() => {
      // fetch user details when components mount
      dispatch(asynloaduser())
    }, [dispatch])
  
    const [educationData, seteducationData] = useState({
      status : '',  // Automatically set the type
      school : '',
      yearofcompl : '',
      board : '',
      percentage : '',
      type : type === 'PostSeniorSecondary' ? 'Post Senior Secondary' : 'Secondary' 
  
    })
    
  
    const handleSubmit = ()=>{
        // Check if the user is authenticated before dispatching the action
      if(!user.isAuthenticated){
        // Handle unauthorized access, such as redirecting to the login page
        console.log("User not Authenticated")
        // You can also dispatch an action to set an error message in the state
        // dispatch(setError('User not authenticated'));
        return;
      }
      // Dispatch the addEducation action with the educationData
      dispatch(addEducation(educationData))
      // Reset the form fields or perform any other actions as needed
      seteducationData({
        status : '',  // Automatically set the type
        school : '',
        yearofcompl : '',
        board : '',
        percentage : '',
        type : type === 'PostSeniorSecondary' ? 'Post Senior Secondary' : 'Secondary' 
    
      });
      //close the form
      onClose();
  
    }

    console.log(educationData)
    
    
  
    return (
      <div className='px-3 py-5'>
          <h1 className='text-xl font-semibold text-center'>Add {type === 'PostSeniorSecondary' ? 'Post Senior Secondary' : 'Secondary' } Details</h1>
          <form action="">
              <div className='mt-2 lg:mt-4'>
                 <label htmlFor="school" className=' block text-sm font-medium text-gray-700'>School</label>
                 <input className='mt-1 p-2 w-full border border-gray-300 rounded-md' 
                    type="text" 
                    id="school"
                    value={educationData.school}
                    onChange={(e) => seteducationData({...educationData, school : e.target.value}) }
                 />
              </div>
              <div className='flex gap-4 mt-2 lg:mt-4'>
                  <div>
                      <label htmlFor="yearofcompl" className='block text-sm font-medium text-gray-700'>Year of Completion</label>
                      <input className='mt-1 p-2 w-full border border-gray-300 rounded-md' 
                        type="text"
                        id = "yearofcompl"
                        value={educationData.yearofcompl}
                        onChange={(e) => seteducationData({...educationData, yearofcompl : e.target.value}) }
                
                      />
                  </div>
                  <div>
                      <label htmlFor="board" className='block text-sm font-medium text-gray-700'>Board</label>
                      <input className='mt-1 p-2 w-full border border-gray-300 rounded-md' 
                        type="text"
                        id = "board"
                        value={educationData.board}
                        onChange={(e) => seteducationData({...educationData, board : e.target.value}) }
                
                      />
                  </div>
                  
              </div>
  
              
  
              <div className='mt-2 lg:mt-4'>
                 <label htmlFor="percentage" className=' block text-sm font-medium text-gray-700'>Percentage</label>
                 <input className='mt-1 p-2 w-full border border-gray-300 rounded-md' 
                    type="text" 
                    id="Percentage"
                    value={educationData.percentage}
                    onChange={(e) => seteducationData({...educationData, percentage : e.target.value}) }
                    />
              </div>
              <div className="mt-6 flex gap-5">
                 <button 
                 onClick={handleSubmit} 
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

export default AddSecondaryForm