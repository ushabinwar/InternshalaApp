import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addJobPost, loadEmployeDetails } from '../../store/userAction'
import { toast } from 'react-toastify'

const AddJobPost = ({onClose}) => {
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user)
    console.log(user)
    
    const [formData, setformData] = useState({
        title:'',
        skills:'',
        jobtype:'In office',
        openings:1,
        description: '',
        preferences: '',
        salary: 0,
        perks: '', 
        responsibility: '',
        stipendStatus: 'Fixed',
        stipendAmount: 0,
        assesments: '',
        location: ''
    })

    const handleInputChange = (e, fieldName)=>{
        setformData({...formData, [fieldName]:e.target.value })

    }
    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(addJobPost(formData))
        onClose()
        toast.success("Job Posted Succsessfully")
        
    }
   
    useEffect(() => {
      dispatch(loadEmployeDetails())
    }, [dispatch])
    
  return (
    <div className='min-h-screen w-full flex justify-center  '>
        <div className='bg-zinc-100 w-full  lg:w-[60%] relative rounded-lg shadow-lg px-4 py-7'>
        <button onClick={onClose} className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
            <h2 className='text-center text-2xl font-semibold mb-10'>Add New Job </h2>
            <form onSubmit={submitHandler} className='' >
                <div>
                    <label className=' text-center block text-sm font-medium mb-1 text-gray-700' >Title</label>
                    <input className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="text"
                     value={formData.title}
                     onChange={(e)=>handleInputChange(e, 'title')}
                      />
                </div>
                <div>
                    <label className='text-center block text-sm font-medium mb-1 text-gray-700' >Skills</label>
                    <input className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="text"
                     value={formData.skills}
                     onChange={(e)=>handleInputChange(e, 'skills')}
                      />
                </div>
                <div>
                    <label className=' text-center block text-sm font-medium mb-1 text-gray-700' >Job Type</label>
                    <select className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="text"
                     value={formData.jobtype}
                     onChange={(e)=>handleInputChange(e, 'jobtype')}
                    >
                     <option value="In office">In office</option>
                     <option value="Remote">Remote</option>
                    </select>
                </div>
                <div>
                    <label className=' text-center block text-sm font-medium mb-1 text-gray-700' >Location</label>
                    <input className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="text"
                     value={formData.location}
                     onChange={(e)=>handleInputChange(e, 'location')}
                    />
                </div>
                <div>
                    <label className=' text-center block text-sm font-medium mb-1 text-gray-700' >Openings</label>
                    <input className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="number"
                     value={formData.openings}
                     onChange={(e)=>handleInputChange(e, 'openings')}
                    />
                </div>
                <div>
                    <label className=' text-center block text-sm font-medium mb-1 text-gray-700' >Description</label>
                    <textarea className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="text"
                     value={formData.description}
                     onChange={(e)=>handleInputChange(e, 'description')}
                    />
                </div>
                <div>
                    <label className=' text-center block text-sm font-medium mb-1 text-gray-700' >Preferences</label>
                    <textarea className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="text"
                     value={formData.preferences}
                     onChange={(e)=>handleInputChange(e, 'preferences')}
                    />
                </div>
                <div>
                    <label className=' text-center block text-sm font-medium mb-1 text-gray-700' >Salary</label>
                    <input className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="number"
                     value={formData.salary}
                     onChange={(e)=>handleInputChange(e, 'salary')}
                    />
                </div>
                <div>
                    <label className=' text-center block text-sm font-medium mb-1 text-gray-700' >Perks</label>
                    <textarea className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="text"
                     value={formData.perks}
                     onChange={(e)=>handleInputChange(e, 'perks')}
                    />
                </div>
                <div>
                    <label className=' text-center block text-sm font-medium mb-1 text-gray-700' >Responsibility</label>
                    <textarea className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="text"
                     value={formData.responsibility}
                     onChange={(e)=>handleInputChange(e, 'responsibility')}
                    />
                </div>
                <div>
                    <label className=' text-center block text-sm font-medium mb-1 text-gray-700' >Stipend Status</label>
                    <select className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="text"
                     value={formData.stipendStatus}
                     onChange={(e)=>handleInputChange(e, 'stipendStatus')}
                    >
                        <option value="Fixed">Fixed</option>
                        <option value="Negotiable">Negotiable</option>
                        <option value="Performance Based">Performance Based</option>
                        <option value="Unpaid">Unpaid</option>
                    </select>
                </div>
                <div>
                    <label className=' text-center block text-sm font-medium mb-1 text-gray-700' >Stipend Amount</label>
                    <input className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="number"
                     value={formData.stipendAmount}
                     onChange={(e)=>handleInputChange(e, 'stipendAmount')}
                    />
                </div>
                <div>
                    <label className=' text-center block text-sm font-medium mb-1 text-gray-700' >Assesments</label>
                    <textarea className='w-full p-2 rounded-md border border-gray-300 mb-4'
                     type="text"
                     value={formData.assesments}
                     onChange={(e)=>handleInputChange(e, 'assesments')}
                    />
                </div>
                <button type='submit' className='bg-blue-500 font-semibold text-white py-2 px-7 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>Add Job</button>
            </form>

        </div>
    </div>
  )
}

export default AddJobPost