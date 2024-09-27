import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asynloaduser, updateEducation } from '../../store/userAction'

const EditGrad = ({onClose, educationData, type}) => {
  const dispatch = useDispatch()
  const user = useSelector((state => state.user))
  // console.log(user)

 

  useEffect(() => {
    //fetch user details when components mount
     dispatch(asynloaduser())
  }, [dispatch])

  const [formData, setformData] = useState(educationData || {})
  // console.log(educationData)
  

  const handleInputChange = (e)=>{
    const {name, value} = e.target
    setformData({...formData, [name]:value})
  }

  const submitHandler = ()=>{
    if(!user.isAuthenticated){
      // Handle unauthorized access, such as redirecting to the login page
      console.log("User not Authenticated")
      // You can also dispatch an action to set an error message in the state
      // dispatch(setError('User not authenticated'));
      return;
    }
    dispatch(updateEducation({...formData, id : educationData.id}))
    onClose()
  }
  // console.log(formData)
  

  return (
    <div className='p-5 lg:px-20 '>
      <h2 className='text-1xl font-semibold text-center lg:text-2xl lg:py-7'>Edit Details</h2>
      <form>
        {/* render input feild based on type */}
        {type === "Graduation" && (
          <>
          <div className=''>
          <label htmlFor="college" className='block text-sm font-medium lg:mt-3 text-gray-700'>college</label>
          <input 
          type="text"
          id='college'
          name="college"
          value={formData.college}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        <div className=''>
          <label htmlFor="degree" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Degree
          </label>
          <input 
          type="text"
          id='degree'
          name="degree"
          value={formData.degree}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        <div className=''>
          <label htmlFor="stream" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Stream
          </label>
          <input 
          type="text"
          id='stream'
          name="stream"
          value={formData.stream}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>

        <div className=''>
          <label htmlFor="startYear" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Start Year
          </label>
          <input 
          type="text"
          id='startYear'
          name="startYear"
          value={formData.startYear}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        <div className=''>
          <label htmlFor="endYear" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            End Year
          </label>
          <input 
          type="text"
          id='endYear'
          name="endYear"
          value={formData.endYear}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        <div className=''>
          <label htmlFor="percentage" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Percentage
          </label>
          <input 
          type="text"
          id='percentage'
          name="percentage"
          value={formData.percentage}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
          </>

        )}  

        {/* render input feild for senior_secondry  */}
        {type === "Senior Secondary" && (
          <>
          <div className=''>
          <label htmlFor="school" className='block text-sm font-medium lg:mt-3 text-gray-700'>
            School
          </label>
          <input 
          type="text"
          id='school'
          name="school"
          value={formData.school}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        <div className=''>
          <label htmlFor="stream" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Stream
          </label>
          <select 
          type="text"
          id='stream'
          name="stream"
          value={formData.stream}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md">
          <option value="">Select Stream</option>
          <option value="Arts">Arts</option>
          <option value="Science">Science</option>
          <option value="Commerce">Commerce</option>
          </select>
          
        </div>
        <div className=''>
          <label htmlFor="board" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Board
          </label>
          <input 
          type="text"
          id='board'
          name="board"
          value={formData.board}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>

        <div className=''>
          <label htmlFor="yearofcompl" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
          Year of Copmpletion
          </label>
          <input 
          type="text"
          id='yearofcompl'
          name="yearofcompl"
          value={formData.yearofcompl}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        
        <div className=''>
          <label htmlFor="percentage" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Percentage
          </label>
          <input 
          type="text"
          id='percentage'
          name="percentage"
          value={formData.percentage}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div></>
        )}

        {/* render input feild for secondry 10th  */}
        {type === "Secondary" && (
          <>
          <div className=''>
          <label htmlFor="school" className='block text-sm font-medium lg:mt-3 text-gray-700'>
            School
          </label>
          <input 
          type="text"
          id='school'
          name="school"
          value={formData.school}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        
        <div className=''>
          <label htmlFor="board" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Board
          </label>
          <input 
          type="text"
          id='board'
          name="board"
          value={formData.board}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>

        <div className=''>
          <label htmlFor="yearofcompl" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Year of Copmpletion
          </label>
          <input 
          type="text"
          id='yearofcompl'
          name="yearofcompl"
          value={formData.yearofcompl}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        
        <div className=''>
          <label htmlFor="percentage" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Percentage
          </label>
          <input 
          type="text"
          id='percentage'
          name="percentage"
          value={formData.percentage}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div></>
        )}

        {/* render input feild based on type for diploma*/}
        {type === "Diploma" && (
          <>
          <div className=''>
          <label htmlFor="college" className='block text-sm font-medium lg:mt-3 text-gray-700'>college</label>
          <input 
          type="text"
          id='college'
          name="college"
          value={formData.college}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        
        <div className=''>
          <label htmlFor="stream" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Stream
          </label>
          <input 
          type="text"
          id='stream'
          name="stream"
          value={formData.stream}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>

        <div className=''>
          <label htmlFor="startYear" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Start Year
          </label>
          <input 
          type="text"
          id='startYear'
          name="startYear"
          value={formData.startYear}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        <div className=''>
          <label htmlFor="endYear" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            End Year
          </label>
          <input 
          type="text"
          id='endYear'
          name="endYear"
          value={formData.endYear}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        <div className=''>
          <label htmlFor="percentage" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Percentage
          </label>
          <input 
          type="text"
          id='percentage'
          name="percentage"
          value={formData.percentage}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
          </>

        )}  

        {/* render input feild based on type for phd */}
        {type === "Phd" && (
          <>
          <div className=''>
          <label htmlFor="college" className='block text-sm font-medium lg:mt-3 text-gray-700'>college</label>
          <input 
          type="text"
          id='college'
          name="college"
          value={formData.college}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        
        <div className=''>
          <label htmlFor="stream" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Stream
          </label>
          <input 
          type="text"
          id='stream'
          name="stream"
          value={formData.stream}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>

        <div className=''>
          <label htmlFor="startYear" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Start Year
          </label>
          <input 
          type="text"
          id='startYear'
          name="startYear"
          value={formData.startYear}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        <div className=''>
          <label htmlFor="endYear" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            End Year
          </label>
          <input 
          type="text"
          id='endYear'
          name="endYear"
          value={formData.endYear}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
        <div className=''>
          <label htmlFor="percentage" className='mt-1 block text-sm font-medium lg:mt-3 text-gray-700'>
            Percentage
          </label>
          <input 
          type="text"
          id='percentage'
          name="percentage"
          value={formData.percentage}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
           />
        </div>
          </>

        )}  
        
        
       


        <div className="mt-6 flex gap-5">
               <button 
               type='button'
               onClick={submitHandler}
               className='bg-blue-400 px-3 py-2 text-white font-semibold rounded-md  hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
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

export default EditGrad