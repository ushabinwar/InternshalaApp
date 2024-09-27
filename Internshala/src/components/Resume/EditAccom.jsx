import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAccom, asynloaduser, updateAccom } from '../../store/userAction'
import { toast } from 'react-toastify'
asynloaduser

const EditAccom = ({accomData, onClose}) => {
    const dispatch =  useDispatch()
    const user = useSelector((state)=> state.user)
    
    useEffect(() => {
        //fetch user details when component mount
        dispatch(asynloaduser())
    }, [dispatch])
    
    const [formData, setformData] = useState({
      accom:accomData.accom||"",
    })
    
    const handleInputChange = (e) =>{
      // console.log(e)
      const {name, value} =  e.target
      setformData({...formData, [name]:value})
      
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            await dispatch(updateAccom(accomData.id, formData))
            onClose()
            toast.success("Accomplishment Updated Successfully")
        }catch(error){
            toast.error("Error Updating Accomplishment")
        }

    }
    console.log(formData)
  return (
    <div className=' lg:w-[60vw] bg-white  rounded-md border shadow-md p-4'>
        <h2 className='text-lg  font-semibold'>Edit Accomplishment</h2>
        <form>
           <div className='mt-4'>
              <label htmlFor="accom" className='text-gray-700 font-semibold'>
                 Accomplishment
              </label>
              <input
                type='text'
                name="accom"
                value={formData.accom}
                onChange={handleInputChange}
                placeholder="Enter Accomplishment "
                className='border mt-1 border-gray-300 rounded-md w-full p-2'
             />
            </div>
           <div className="mt-3 flex gap-5 justify-end">
               <button 
               onClick={handleSubmit}
               type='button'
               className='bg-blue-400 px-6 py-2 text-white font-semibold rounded-md  hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
                Save
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

export default EditAccom;