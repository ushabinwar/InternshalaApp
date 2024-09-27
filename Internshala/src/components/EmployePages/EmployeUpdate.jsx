import React, { useEffect } from 'react'
import EmployeNav from '../Nav/EmployeNav';
import { useDispatch, useSelector } from 'react-redux';
import { asyncloademploye } from '../../store/userAction';

const EmployeUpdate = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    console.log(user)

    useEffect(() => {
        // fetch user details when component mount
      dispatch(asyncloademploye())
    }, [dispatch])
    
  return (
    <>
    <EmployeNav/>
    <div className=''>
      <form className='lg:max-w-[35%] m-auto shadow rounded px-7 py-7 lg:my-4 border p'>
        <div className=' justify-between mb-7 '>
        <h1 className='text-3xl font-semibold mt-3 '>Update Profile</h1>
        </div>
        
       <div className='   lg:grid    lg:grid-cols-2  lg:gap-6 '>
         <div className=''>
          <label htmlFor="firstname" className='text-md block font-semibold text-gray-700 mt-2 '>First Name</label>
          <input
          type="text"
          id='firstname'
          name='firstname'
        //   value={formData.firstname}
        //   onChange={(e)=> handleInputchange(e, "firstname")}
          className=' p-2 w-full  rounded border-2 leading-tight focus:outline-none focus:shadow-outline mt-2' />
         </div>
         <div className=''>
          <label htmlFor="lastname" className='text-md block font-semibold text-gray-700 mt-2'>Last Name</label>
          <input 
          type="text"
          id='lastname'
          name='lastname'
        //   value={formData.lastname}
        //   onChange={(e)=> handleInputchange(e, "lastname")}
          className=' p-2 w-full  rounded border-2 leading-tight focus:outline-none focus:shadow-outline mt-2' />
         </div>
       </div>
         
       <div className='   lg:grid  lg:grid-cols-2 lg:mt-3 lg:gap-6 '>
         <div className=''>
          <label htmlFor="email" className='text-md block font-semibold text-gray-700 mt-2 '>Email</label>
          <input type="text"
          id='email'
          name='email'
        //   value={formData.email}
        //   onChange={(e)=> handleInputchange(e, "email")}
          className=' p-2 w-full  rounded border-2 leading-tight focus:outline-none focus:shadow-outline mt-2' />
         </div>
         <div className=''>
          <label htmlFor="contact" className='text-md block font-semibold text-gray-700 mt-2'>Contact</label>
          <input 
          type="text"
          id='contact'
          name='contact'
        //   value={formData.contact}
        //   onChange={(e)=> handleInputchange(e, "contact")}
          className=' p-2 w-full  rounded border-2 leading-tight focus:outline-none focus:shadow-outline mt-2' />
         </div>
       </div>

       <div className='   lg:grid  lg:grid-cols-2 lg:mt-3 lg:gap-6 '>
         <div className=''>
          <label htmlFor="organizationName" className='text-md block font-semibold text-gray-700 mt-2'>Organization Name</label>
          <input 
          type="text"
          id='organizationName'
          name='organizationName'
        //   value={formData.organizationName}
        //   onChange={(e)=> handleInputchange(e, "organizationName")}
          className=' p-2 w-full  rounded border-2 leading-tight focus:outline-none focus:shadow-outline mt-2' />
         </div>
         
       </div>

       <div className='avatar flex gap-4 items-center mt-5 '>
        <label htmlFor="organizationLogo" className='text-md block font-semibold text-gray-700'>Organization <br /> Logo</label>
        <input 
        type="file" 
        name="organizationLogo" 
        id="organizationLogo" 
        accept='image/*'
        // onChange={handleAvatarChange}
        className="mt-1  p-2 w-full lg:w-1/3 border border-gray-300 rounded-md"/>
        {/* {avatarFormData.preview && (
          <img
          src={avatarFormData.preview}
          alt="Avatar Preview"
          className="mt-2 rounded-md h-[19vh]  "
         />
        )} */}

       </div>

       <div className="mt-6">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        //   onClick={handleSubmit}
        >
          Update Profile
        </button>
        <button
          type="submit"
          className="ml-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        //   onClick={handleAvatarSubmit}
        >
          Upload Avatar
        </button>
       
      </div>
       
      </form>
    </div>
    </>
  )
}

export default EmployeUpdate;