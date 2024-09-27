import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asynloaduser, updateUserDetails, uploadAvatar } from '../../store/userAction'
import { toast } from 'react-toastify'

const Studentupdate = ({onClose}) => {
  const dispatch = useDispatch()
  const user = useSelector((state)=> state.user)
  // console.log(user)

  useEffect(() => {
    //fetch userr details when component mount
    dispatch(asynloaduser())
  }, [dispatch])

  //State for form feild
  const [formData, setformData] = useState({
    firstname: user.user.firstname,
    lastname: user.user.lastname,
    email: user.user.email,
    contact: user.user.contact,
    city: user.user.city,
    gender: user.user.gender,
 
  })

  // State for avatar file and preview
  const [avatarFormData, setavatarFormData] = useState({
    avatar : null,
    preview : user.user.avatar.url //// Default to the current avatar URL
  })


  const handleInputchange = (e, fieldName)=>{
    setformData({...formData, [fieldName] : e.target.value})
  }
  
  // Handle avatar file change
  const handleAvatarChange = (e )=>{
    // console.log(e)
    const selectedFile = e.target.files[0]

    setavatarFormData({
      avatar : selectedFile,
      preview : URL.createObjectURL(selectedFile), //Create a preview url
    })
    
   
  }
  console.log(avatarFormData.avatar)
  // Handle form submission for details update
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUserDetails(user.user._id, formData));
    onClose() // close the form 
    toast.success("Student Updated")
  }

  // Handle form submission for upload avatar
  const handleAvatarSubmit = (e)=>{
    e.preventDefault()
    // const formData = new FormData()
    // formData.append("avatar", avatarFormData.avatar )
    // dispatch(uploadAvatar(user.user._id, formData))
    // onClose()//close the form
    if (avatarFormData.avatar) {
      const avatarData = new FormData()
      avatarData.append("avatar", avatarFormData.avatar)
      dispatch(uploadAvatar(user.user._id, avatarData))
      onClose() // Close the form
      // toast.success("Avatar Uploded Successfully")
    } else {
      toast.error("Please select an avatar to upload")
    }
    
  }

  


  return (
    <div className=''>
      <form className='lg:max-w-[55%] m-auto shadow rounded px-7 py-7 lg:my-4 border p'>
        <div className='flex  justify-between mb-7 '>
        <h1 className='text-3xl font-semibold '>Update Profile</h1>
        <button onClick={onClose} type='button' className=' py-3 px-5 bg-gray-500 text-white hidden font-semibold rounded-md lg:inline '>
          Close Form
        </button>
        <i className='lg:hidden'>cut</i>
        </div>
        
       <div className='   lg:grid    lg:grid-cols-2  lg:gap-6 '>
         <div className=''>
          <label htmlFor="firstname" className='text-md block font-semibold text-gray-700 mt-2 '>First Name</label>
          <input
          type="text"
          id='firstname'
          name='firstname'
          value={formData.firstname}
          onChange={(e)=> handleInputchange(e, "firstname")}
          className=' p-2 w-full  rounded border-2 leading-tight focus:outline-none focus:shadow-outline mt-2' />
         </div>
         <div className=''>
          <label htmlFor="lastname" className='text-md block font-semibold text-gray-700 mt-2'>Last Name</label>
          <input 
          type="text"
          id='lastname'
          name='lastname'
          value={formData.lastname}
          onChange={(e)=> handleInputchange(e, "lastname")}
          className=' p-2 w-full  rounded border-2 leading-tight focus:outline-none focus:shadow-outline mt-2' />
         </div>
       </div>
         
       <div className='   lg:grid  lg:grid-cols-2 lg:mt-3 lg:gap-6 '>
         <div className=''>
          <label htmlFor="email" className='text-md block font-semibold text-gray-700 mt-2 '>Email</label>
          <input type="text"
          id='email'
          name='email'
          value={formData.email}
          onChange={(e)=> handleInputchange(e, "email")}
          className=' p-2 w-full  rounded border-2 leading-tight focus:outline-none focus:shadow-outline mt-2' />
         </div>
         <div className=''>
          <label htmlFor="contact" className='text-md block font-semibold text-gray-700 mt-2'>Contact</label>
          <input 
          type="text"
          id='contact'
          name='contact'
          value={formData.contact}
          onChange={(e)=> handleInputchange(e, "contact")}
          className=' p-2 w-full  rounded border-2 leading-tight focus:outline-none focus:shadow-outline mt-2' />
         </div>
       </div>

       <div className='   lg:grid  lg:grid-cols-2 lg:mt-3 lg:gap-6 '>
         <div className=''>
          <label htmlFor="city" className='text-md block font-semibold text-gray-700 mt-2'>City</label>
          <input 
          type="text"
          id='city'
          name='city'
          value={formData.city}
          onChange={(e)=> handleInputchange(e, "city")}
          className=' p-2 w-full  rounded border-2 leading-tight focus:outline-none focus:shadow-outline mt-2' />
         </div>
         <div className=''>
          <label htmlFor="gender" className='text-md block font-semibold text-gray-700 mt-2'>Gender</label>
          <select type="text"
          id='gender'
          name='gender'
          value={formData.gender}
          onChange={(e)=> handleInputchange(e, "gender")}
          className=' p-2 w-full  rounded border-2 leading-tight focus:outline-none focus:shadow-outline mt-2' >
            <option value= "Male">Male</option>
            <option value="Female">Female</option>

          </select>
         </div>
       </div>

       <div className='avatar flex gap-4 items-center mt-5 '>
        <label htmlFor="avatar" className='text-md block font-semibold text-gray-700'>Avatar</label>
        <input 
        type="file" 
        name="avatar" 
        id="avatar" 
        accept='image/*'
        onChange={handleAvatarChange}
        className="mt-1  p-2 w-full lg:w-1/3 border border-gray-300 rounded-md"/>
        {avatarFormData.preview && (
          <img
          src={avatarFormData.preview}
          alt="Avatar Preview"
          className="mt-2 rounded-md h-[19vh]  "
         />
        )}

       </div>

       <div className="mt-6">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleSubmit}
        >
          Update Profile
        </button>
        <button
          type="submit"
          className="ml-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
          onClick={handleAvatarSubmit}
        >
          Upload Avatar
        </button>
       
      </div>
       
      </form>
    </div>
  )
}

export default Studentupdate;