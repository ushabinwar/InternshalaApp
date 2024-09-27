import React, { useState } from 'react'
import AddGraduationForm from './AddGraduationForm'
import AddSeniorSecondaryForm from './AddSeniorSecondaryForm'
import AddSecondaryForm from './AddSecondaryForm'
import AddDiplomaFrom from './AddDiplomaForm'
import AddPhdForm from './AddPhdForm'

const AddEducation = ({onClose}) => {

  const [educationType, seteducationType] = useState('')

  const handleAddEducation = (type)=>{
    seteducationType(type)
    
  }
  console.log(educationType )

  const renderEducationForm = () =>{
    switch (educationType){
      case 'graduation':
      return <GraduationForm onClose = {onClose}/>
      case "senior_secondry":
      return <SeniorSecondaryForm onClose = {onClose}/>
      case "secondry":
      return <SecondaryForm onClose = {onClose}/>
      case "diploma":
      return <DiplomaForm onClose = {onClose}/>
      case "phd":
      return <PhdForm onClose = {onClose}/>
      default:
      return null;

    }
    
  }  


  return (
    <div className='w-full lg:w-2/3 lg:m-auto lg:py-7 lg:px-5   mt-2 px-1 py-2 bg-white rounded-md shadow-md'>
       <div className='flex  justify-between mb-6 '>
        <h1 className='text-[3vh] lg:text-3xl font-semibold '>Add Education</h1>
        <button onClick={onClose} type='button' className=' py-2 px-4 bg-gray-500 text-white hidden font-semibold rounded-md lg:inline '>
          Close Form
        </button>
        <i className='lg:hidden'>cut</i>
        {educationType && (
         <>
           <button onClick={()=> seteducationType('')} type='button' className=' py-2 px-4 bg-gray-500 text-white hidden font-semibold rounded-md lg:inline '>
           Close Form
           </button>
           <i className='lg:hidden'>cut</i>
         </>
        )}
        </div>

        <div className='flex flex-col gap-3'>
            <button className='bg-blue-500 text-white w-full font-semibold  rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
              onClick={() => handleAddEducation('graduation')}>
                Add Graduation/Post Graduation
            </button>
            <button
              onClick={() => handleAddEducation('senior_secondry')}
              className='bg-blue-500 text-white w-full font-semibold  rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
              >
              Add Senior Secondary (XII) 
            </button>
            <button
              onClick={() => handleAddEducation('secondry')}
              className='bg-blue-500 text-white w-full font-semibold  rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
              Add Secondary (X) 
            </button>
            <button
              onClick={() => handleAddEducation('diploma')}
              className='bg-blue-500 text-white w-full font-semibold  rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
              Add Diploma 
            </button>
            <button
              onClick={() => handleAddEducation('phd')}
              className='bg-blue-500 text-white w-full font-semibold  rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
              Add PhD
            </button>
             {/* Add buttons for other education types */}
        </div>
        {/* Render the related education form */}
        {renderEducationForm()}
    </div>
  )
}

export default AddEducation


const GraduationForm = ({ onClose }) => {
  // Implement your graduation form here
  return (
    <div className='absolute top-16 left-0 min-h-[60vh] bg-slate-100 w-full border'>
      <AddGraduationForm onClose={() => onClose()}  />
    </div>
  );
};

const SeniorSecondaryForm = ({ onClose }) => {
  // Implement your SeniorSecondary form here
  return (
    <div className='absolute top-16 left-0 min-h-[60vh] bg-slate-100 w-full border'>
      <AddSeniorSecondaryForm onClose={() => onClose()}  />
    </div>
  );
};


const SecondaryForm = ({ onClose }) => {
  // Implement your secondary form here
  return (
    <div className='absolute top-16 left-0 min-h-[60vh] bg-slate-100 w-full border'>
      <AddSecondaryForm onClose={() => onClose()}  />
    </div>
  );
};

const DiplomaForm = ({ onClose }) => {
  // Implement your diploma form here
  return (
    <div className='absolute top-16 left-0 min-h-[60vh] bg-slate-100 w-full border'>
      <AddDiplomaFrom onClose={() => onClose()}  />
    </div>
  );
};

const PhdForm = ({ onClose }) => {
  // Implement your phd form here
  return (
    <div className='absolute top-16 left-0 min-h-[60vh] bg-slate-100 w-full border'>
      <AddPhdForm onClose={() => onClose()}  />
    </div>
  );
};