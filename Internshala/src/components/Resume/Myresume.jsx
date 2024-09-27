import React, { useEffect, useState } from 'react'
import Navbar from '../Nav/Navbar'
import Studentupdate from '../StudentPages/Studentupdate'
import { useDispatch, useSelector } from 'react-redux'
import { asynloaduser, deleteAccom, deleteEducation, deleteInternship, deleteJob, deleteProject, deleteResponsibility, deleteSkill, deleteTraining } from '../../store/userAction'
import AddEducation from './AddEducation'
import EditGrad from './EditGrad'
import AddJob from './AddJob'
import EditJob from './EditJob'
import AddInternship from './AddInternship'
import EditInternship from './EditInternship'
import { toast } from 'react-toastify'
import AddRespo from './AddRespo'
import EditRespo from './EditRespo'
import AddTraining from './AddTraining'
import EditTraining from './EditTraining'
import AddProject from './AddProject'
import EditProject from './EditProject'
import AddSkill from './AddSkill'
import EditSkill from './EditSkill'
import AddAccom from './AddAccom'
import EditAccom from './EditAccom'
import AddPortfolio from './AddPortfolio'
import EditPortfolio from './EditPortfolio'

const Myresume = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  console.log(user)

  const [editIndex, seteditIndex] = useState(null)
  const [editJobIndex, seteditJobIndex] = useState(null)
  const [editInternshipIndex, seteditInternshipIndex] = useState(null)
  const [editRespoIndex, seteditRespoIndex] = useState(null)
  const [editTrainingIndex, seteditTrainingIndex] = useState(null)
  const [editProjectIndex, seteditProjectIndex] = useState(null)
  const [editSkillIndex, seteditSkillIndex] = useState(null)
  const [editAccomIndex, seteditAccomIndex] = useState(null)
  const [editPortfolioIndex, seteditPortfolioIndex] = useState(null)

  const [slectedEducation, setslectedEducation] = useState(null)
  const [selectedJob, setselectedJob] = useState(null)
  const [selectedInternship, setselectedInternship] = useState(null)
  const [selectedRespo, setselectedRespo] = useState(null)
  const [selectedTraining, setselectedTraining] = useState(null)
  const [selectedProject, setselectedProject] = useState(null)
  const [selectedSkill, setselectedSkill] = useState(null)
  const [selectedAccom, setselectedAccom] = useState(null)
  const [selectedPortfolio, setselectedPortfolio] = useState(null)

  const [isFormVisible, setFormVisible] = useState(false)
  const [isAddEducationFormVisible, setAddEducationFormVisible] = useState(false)
  const [isAddJobFormVisible, setAddJobFormVisible] = useState(false)
  const [isAddInternshipFormVisible, setAddInternshipFormVisible] = useState(false)
  const [isAddRespoFromVislible, setAddRespoFromVislible] = useState(false)
  const [isAddTrainingFormVisible, setAddTrainingFormVisible] = useState(false)
  const [isAddProjectFormVisible, setAddProjectFormVisible] = useState(false)
  const [isAddSkillFormVisible, setAddSkillFormVisible] = useState(false)
  const [isAddAccomplishmentFormVislible, setAddAccomplishmentFormVislible] = useState(false)
  const [isAddPortfolioFormVisible, setAddPortfolioFormVisible] = useState(false)

  useEffect(() => {
   const fatchUserDetails = async ()=>{
      try{
        await dispatch(asynloaduser())
        
      }catch(error){
        console.error("Error fetching user details:", error)
        
      }
      // console.log("data fatched")
      
   }
   fatchUserDetails()
  }, [dispatch])
  
   
  const toggleFormVisibility = () =>{
    setFormVisible(!isFormVisible)
  }
  const toggleAddEducationFormVisibility = () =>{
    setAddEducationFormVisible(!isAddEducationFormVisible)
  }
  const toggleAddJobFormVisibility = () =>{
    setAddJobFormVisible(!isAddJobFormVisible)
  }
  const toggleAddInternshipFormVisibility = () =>{
    setAddInternshipFormVisible(!isAddInternshipFormVisible)
  }
  const toggleAddRespoFormVisibility = () =>{
    setAddRespoFromVislible(!isAddRespoFromVislible)
  }
  const toggleAddTrainingFormVisibility = ()=>{
    setAddTrainingFormVisible(!isAddTrainingFormVisible)
  }
  const toggleAddProjectFormVisibility = ()=>{
    setAddProjectFormVisible(!isAddProjectFormVisible)
  }
  const toggleAddSkillFormVisibility = ()=>{
    setAddSkillFormVisible(!isAddSkillFormVisible)
  }
  const toggleAddAccomplishmentFormVisibility = ()=>{
    setAddAccomplishmentFormVislible(!isAddAccomplishmentFormVislible)
  }
  const togglePortfolioFormVisibility = ()=>{
    setAddPortfolioFormVisible(!isAddPortfolioFormVisible)
  }

  const handleEducationEdit = (education, index) =>{
    setslectedEducation(education)
    seteditIndex(index)
  }
  const handleJobEdit = (job, index) =>{
    setselectedJob(job)
    seteditJobIndex(index)
  }
  const handleInternshipEdit = (internship, index)=>{
    seteditInternshipIndex(index)
    setselectedInternship(internship)
  }
  const handleRespoEdit = (respo, index)=>{
    setselectedRespo(respo)
    seteditRespoIndex(index)
  }
  const handleTrainingEdit = (course, index)=>{
    setselectedTraining(course)
    seteditTrainingIndex(index)
  }
  const handleProjectEdit = (project, index)=>{
    setselectedProject(project)
    seteditProjectIndex(index)
  }
  const handleSkillEdit = (skill, index)=>{
    setselectedSkill(skill)
    seteditSkillIndex(index)
  }
  const handleAccomEdit = (accom, index)=>{
    setselectedAccom(accom)
    seteditAccomIndex(index)
  }
  const handleEditPortfolio = (portfolio ,index)=>{
    seteditPortfolioIndex(index)
    setselectedPortfolio(portfolio)
  }


  const handleCancleEdit = ()=>{
    seteditIndex(null)
    setslectedEducation(null)
  }
  const handleCancleJob = ()=>{
    seteditJobIndex(null)
    setselectedJob(null)
  }
  const handleCancleInternship = ()=>{
    seteditInternshipIndex(null)
    setselectedInternship(null)
  }
  const handleCancleRespo = ()=>{
    setselectedRespo(null)
    seteditRespoIndex(null)
  }
  const handleCancleTraining = ()=>{
    setselectedTraining(null)
    seteditTrainingIndex(null)
  }
  const handleCancleProject = ()=>{
    setselectedProject(null)
    seteditProjectIndex(null)
  }
  const handleCancleSkill = ()=>{
    setselectedSkill(null)
    seteditSkillIndex(null)
  }
  const handleCancleAccom = ()=>{
    setselectedAccom(null)
    seteditAccomIndex(null)
  }

  const handleDeleteEducation = (educationId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this Education ?")
    if(confirmDelete){
      dispatch(deleteEducation(educationId))
    }
  }
  const handleDeleteJob = (jobId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this Job ?")
    if(confirmDelete){
      dispatch(deleteJob(jobId))
    }
  }
  const handleDeleteInternship = (internshipId)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this Internship ?")
    if(confirmDelete){
      dispatch(deleteInternship(internshipId))
    }
  }
  const handleDeleteRespo = (respoId)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this Responsibility ?")
    if(confirmDelete){
      dispatch(deleteResponsibility(respoId))
    }
  }
  const handleDeleteTraining = (courseId)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this Training ?")
    if(confirmDelete){
      dispatch(deleteTraining(courseId))
    }
  }
  const handleDeleteProject = (projectId)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this Project ?")
    if(confirmDelete){
      dispatch(deleteProject(projectId))
    }
  }
  const handleDeleteSkill = (skillId)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this Skill ?")
    if(confirmDelete){
      dispatch(deleteSkill(skillId))
    }
  }
  const handleDeleteAccom = (accomId)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this Accomplishment ?")
    if(confirmDelete){
      dispatch(deleteAccom(accomId))
    }
  }

  // console.log(slectedEducation)
  // console.log(selectedJob)
  //  console.log(selectedInternship)
  // console.log(selectedRespo)
  // console.log(selectedTraining)
  // console.log(selectedProject)
  // console.log(selectedSkill)
  // console.log(selectedAccom)
  
  return (
    <div className='min-h-[100vh] relative bg-gray-100   w-full pb-10'>
        <Navbar/>
        <h1 className='text-2xl font-semibold text-center p-10'>Resume</h1>
        <div className='formdiv w-[85%] min-h-[100vh] border-2 m-auto lg:w-[80%] px-5  lg:py-5 lg:px-7'>
          <div className='personalinfo border-b-2 py-5 '>
            <h1 className='text-2xl font-semibold  pb-1 flex gap-3'>
              {user.user && user.user.firstname} {user.user && user.user.lastname}
              <i onClick={toggleFormVisibility}>edit</i>
            </h1>
            <h3 className='text-[3vh] '>{user.user && user.user.email} </h3>
            <h3 className=''>+91 {user.user && user.user.contact} </h3>
            <h3 className='text-[2.5vh]'>{user.user && user.user.city} </h3>
          </div>
          {isFormVisible && <Studentupdate onClose = {toggleFormVisibility}/>}

          <div className='education py-4 lg:flex border-b-2'>
            <h1 className=''>EDUCATION</h1>
            <div className='w-full  lg:ml-[30vh] '>
            {user.user &&
                 user.user.resume &&
                 user.user.resume.education.map((education, index)=>(
                  <div key={index} className='education-item mb-4'>
                    {editIndex === index ? (
                      <div className='edit-from'>
                        <EditGrad onClose={handleCancleEdit} educationData = {slectedEducation} type={slectedEducation.type}/>
                      </div>
                    ):(
                      <>
                      <h1 className='font-semibold'>{education.degree || education.type}, {education.stream || education.board}</h1>
                     
                     <p>{education.college || education.school}</p>
                     <p>{education.startYear} - {education.endYear} { education.yearofcompl}</p>
                     <p>CGPA - {education.percentage}</p>
                     <button onClick={() => handleDeleteEducation(education.id)}
                      className='px-4 mt-4 py-1 rounded-md mr-4 text-white bg-red-400'>
                       Delete
                     </button>
                     <button onClick={() => handleEducationEdit(education, index)} className='px-5 mt-4 py-1 rounded-md mr-4 text-white bg-blue-400'>
                       Edit
                     </button>
                      </>
                    )}
                     
                  </div>
              ))}
              
              <button className='text-sky-500 font-semibold flex mt-2'
              onClick={toggleAddEducationFormVisibility}>
              <i className='ri-add-fill'></i> Add Education </button>
            </div>
          </div>
          {isAddEducationFormVisible && (
            <div className='Add-education-from  min-h-[60vh] w-[79vw] fixed top-[35%] lg:top-[37%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
              <AddEducation onClose={toggleAddEducationFormVisibility}/>
            </div>
          )}

         <div className='wrokexperience py-4 lg:flex border-b-2'>
            <h1 className=''>WORK EXPERIENCE</h1>
            <div className='w-full  lg:ml-[30vh] bg-red-200 '>
              {user.user &&
                 user.user.resume &&
                 user.user.resume.jobs.map((job, index)=>(
                  <div key={index} className=' mb-4'>
                    {editJobIndex === index ? (
                      <div className='edit-from'>
                        <EditJob onClose={handleCancleJob} jobData={selectedJob} />
                      </div>
                    ):(
                      <>
                      <h1 className='font-semibold'>{job.profile || job.type}</h1>
                      <p>{job.organization}, {job.location}</p>
                      <p>{job.description}</p>
                      <p>{job.type} { job.startDate} - {job.endDate}</p>
                      <button onClick={() => handleDeleteJob(job.id)}
                       className='px-4 mt-4 py-1 rounded-md mr-4 text-white bg-red-400'>
                        Delete
                      </button>
                      <button onClick={() => handleJobEdit(job, index)} className='px-5 mt-4 py-1 rounded-md mr-4 text-white bg-blue-400'>
                        Edit
                      </button>
                     </>
                    )}
                     
                  </div>
              ))}

              {user.user &&
                 user.user.resume &&
                 user.user.resume.internships.map((internship, index)=>(
                  <div key={index} className='education-item mb-4'>
                    {editInternshipIndex === index ? (
                      <div className='edit-from '>
                        <EditInternship onClose={handleCancleInternship} internshipData={selectedInternship} />
                      </div>
                    ):(
                      <>
                      <h1 className='font-semibold'>{internship.profile || internship.type}</h1>
                      <p>{internship.organization}, {internship.location}</p>
                      <p>{internship.description}</p>
                      <p>{internship.type} { internship.startDate} - {internship.endDate}</p>
                      <button onClick={() => handleDeleteInternship(internship.id)}
                       className='px-4 mt-4 py-1 rounded-md mr-4 text-white bg-red-400'>
                        Delete
                      </button>
                      <button onClick={() => handleInternshipEdit(internship, index)} className='px-5 mt-4 py-1 rounded-md mr-4 text-white bg-blue-400'>
                        Edit
                      </button>
                     </>
                    )}
                     
                  </div>
              ))}
              
              
             <div className='flex gap-2'> 
              <button className='text-sky-500 font-semibold flex mt-2'
              onClick={toggleAddJobFormVisibility}>
              <i className='ri-add-fill'></i> Add Job 
              </button>
              <button className='text-sky-500 font-semibold flex mt-2'
              onClick={toggleAddInternshipFormVisibility}>
              <i className='ri-add-fill'></i> Add Intership 
              </button>
              </div>
            </div>
          </div>
          {isAddJobFormVisible && (
            <div className='Add-job-from  min-h-[60vh] w-[85vw] lg:w-[50vw] fixed top-[50%] lg:top-[42%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
              < AddJob onClose={toggleAddJobFormVisibility}/>
            </div>
          )}
          {isAddInternshipFormVisible && (
            <div className='Add-job-from  min-h-[60vh] w-[85vw] lg:w-[50vw] fixed top-[50%] lg:top-[42%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
              < AddInternship onClose={toggleAddInternshipFormVisibility}/>
            </div>
          )}


         <div className='responsibilities py-4 lg:flex border-b-2'>
            <h1 className=''>POSITION <br /> OF RESPONSIBILITY</h1>
            <div className='w-full  lg:ml-[28vh] bg-red-200  '>
            {user.user &&
                 user.user.resume &&
                 user.user.resume.responsibilities.map((respo, index)=>(
                  <div key={index} className=' mb-4'>
                    {editRespoIndex === index ? (
                      <div className='edit-from '>
                        <EditRespo onClose={handleCancleRespo} respoData = {selectedRespo} />
                      </div>
                    ):(
                      <>
                      <h2 className='font-semibold'>{respo.description}</h2>
                     
                     
                     <button onClick={() => handleDeleteRespo(respo.id)}
                      className='px-4 mt-4 py-1 rounded-md mr-4 text-white bg-red-400'>
                       Delete
                     </button>
                     <button onClick={() => handleRespoEdit(respo, index)} className='px-5 mt-4 py-1 rounded-md mr-4 text-white bg-blue-400'>
                       Edit
                     </button>
                      </>
                    )}
                     
                  </div>
              ))}
              
              <button className='text-sky-500 font-semibold flex mt-2'
              onClick={toggleAddRespoFormVisibility}>
              <i className='ri-add-fill'></i> Add Posititon of Responsibility </button>
            </div>
          </div>
           {/* Add POSITIONS OF RESPONSIBILITY form or logic here */}
          {isAddRespoFromVislible && (
            <div className='Add-education-from  min-h-[40vh] w-[85vw] lg:w-[60vw]  fixed top-[45%] lg:top-[37%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
              <AddRespo onClose={toggleAddRespoFormVisibility}/>
            </div>
          )}



          <div className='training py-4 lg:flex border-b-2 '>
            <h1 className=''>TRAININGS/ COURSES</h1>
            <div className='w-full  lg:ml-[30vh] bg-red-200 '>
              {user.user &&
                 user.user.resume &&
                 user.user.resume.courses.map((course, index)=>(
                  <div key={index} className=' mb-4'>
                    {editTrainingIndex === index ? (
                      <div className='edit-from'>
                        <EditTraining onClose={handleCancleTraining} trainingData={selectedTraining} />
                      </div>
                    ):(
                      <>
                      <h1 className='font-semibold'>{course.program}</h1>
                      <p>{course.organization}, {course.locationType ==="Location" ? course.location : course.locationType}</p>
                      <p>{course.type} { course.startDate} - {course.endDate}</p>
                      <p>{course.description}</p>
                      
                      <button onClick={() => handleDeleteTraining(course.id)}
                       className='px-4 mt-4 py-1 rounded-md mr-4 text-white bg-red-400'>
                        Delete
                      </button>
                      <button onClick={() => handleTrainingEdit(course, index)} className='px-5 mt-4 py-1 rounded-md mr-4 text-white bg-blue-400'>
                        Edit
                      </button>
                     </>
                    )}
                     
                  </div>
              ))}
              
              <button className='text-sky-500 font-semibold flex mt-2'
                onClick={toggleAddTrainingFormVisibility}>
                <i className='ri-add-fill'></i> Add Training
              </button>
            </div>
          </div>
          {isAddTrainingFormVisible && (
            <div className='Add-job-from  min-h-[60vh] w-[85vw] lg:w-[50vw] fixed top-[50%] lg:top-[42%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
              < AddTraining onClose={toggleAddTrainingFormVisibility}/>
            </div>
          )}



         <div className='projcet py-4 lg:flex border-b-2'>
            <h1 className=''>PROJECTS</h1>
            <div className='w-full  lg:ml-[35vh]  '>
              {user.user &&
                 user.user.resume &&
                 user.user.resume.projects.map((project, index)=>(
                  <div key={index} className=' mb-4'>
                    {editProjectIndex === index ? (
                      <div className='edit-from'>
                        <EditProject onClose={handleCancleProject} projectData={selectedProject} />
                      </div>
                    ):(
                      <>
                      <h1 className='font-semibold'>{project.title}</h1>
                      <p>({ project.startDate}) - ({project.present === true ? "Present" : project.endDate})</p>
                      {project.projectLink && (
                       <p className='text-blue-600'>
                         <a href={project.projectLink} target="_blank" rel="noopener noreferrer">{project.projectLink}</a>
                        </p>
                      )}
                      <p>{project.description}</p>
                      <button onClick={() => handleDeleteProject(project.id)}
                       className='px-4 mt-4 py-1 rounded-md mr-4 text-white bg-red-400'>
                        Delete
                      </button>
                      <button onClick={() => handleProjectEdit(project, index)} className='px-5 mt-4 py-1 rounded-md mr-4 text-white bg-blue-400'>
                        Edit
                      </button>
                     </>
                    )}
                     
                  </div>
              ))}
              <button className='text-sky-500 font-semibold flex mt-2'
              onClick={toggleAddProjectFormVisibility}>
              <i className='ri-add-fill'></i> Add Project 
              </button>
            </div>
          </div>
          {isAddProjectFormVisible && (
            <div className='Add-job-from  min-h-[60vh] w-[85vw] lg:w-[50vw] fixed top-[50%] lg:top-[42%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
              < AddProject onClose={toggleAddProjectFormVisibility}/>
            </div>
          )}

         <div className='skills py-4 lg:flex border-b-2'>
            <h1 className=''>SKILLS</h1>
            <div className='w-full  lg:ml-[37vh] bg-red-100 '>
              {user.user &&
                 user.user.resume &&
                 user.user.resume.skills.map((skill, index)=>(
                  <div key={index} className=' mb-4'>
                    {editSkillIndex === index ? (
                      <div className='edit-from'>
                        <EditSkill onClose={handleCancleSkill} skillData={selectedSkill} />
                      </div>
                    ):(
                      <>
                      <h1 className='font-semibold'>{skill.skillName}</h1>
                      <p>{skill.proficiency}</p>
                      <button onClick={() => handleDeleteSkill(skill.id)}
                       className='px-4 mt-4 py-1 rounded-md mr-4 text-white bg-red-400'>
                        Delete
                      </button>
                      <button onClick={() => handleSkillEdit(skill, index)} className='px-5 mt-4 py-1 rounded-md mr-4 text-white bg-blue-400'>
                        Edit
                      </button>
                     </>
                    )}
                     
                  </div>
              ))}
              <button className='text-sky-500 font-semibold flex mt-2'
              onClick={toggleAddSkillFormVisibility}>
              <i className='ri-add-fill'></i> Add Skill 
              </button>
            </div>
          </div>
          {isAddSkillFormVisible && (
            <div className='Add-job-from  min-h-[60vh] w-[85vw] lg:w-[50vw] fixed top-[60%] lg:top-[42%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
              <AddSkill onClose={toggleAddSkillFormVisibility}/>
            </div>
          )}


         <div className='portfolios py-4 lg:flex border-b-2'>
            <h1 className=''>Portfolios <br /> Work Samples</h1>
            <div className='w-full  lg:ml-[37vh] bg-red-100 '>
              {user.user &&
                 user.user.resume &&
                 user.user.resume.portfolio ? (
                  <div className=' potfolioitem mb-4'>
                    <h2 className='font-semibold'>Portfolio</h2>
                    {/* Iterate over portfolio items and render them */}
                    {user.user.resume.portfolio.blogLink && (
                      <p>
                        Blog Link:{" "}
                        <a className='text-blue-600' href={user.user.resume.portfolio.blogLink}>
                          {user.user.resume.portfolio.blogLink}
                        </a>
                      </p>
                    )}
                    {user.user.resume.portfolio.githubProfile && (
                      <p>
                        Github Profile:{" "}
                        <a className='text-blue-600' href={user.user.resume.portfolio.githubProfile}>
                          {user.user.resume.portfolio.githubProfile}
                        </a>
                      </p>
                    )}
                    {user.user.resume.portfolio.playStoreDevAccount && (
                      <p>
                        Play Store Developer Account:{" "}
                        <a className='text-blue-600' href={user.user.resume.portfolio.playStoreDevAccount}>
                          {user.user.resume.portfolio.playStoreDevAccount}
                        </a>
                      </p>
                    )}
                    {user.user.resume.portfolio.behancePortfolio && (
                      <p>
                        Behance Portfolio:{" "}
                        <a className='text-blue-600' href={user.user.resume.portfolio.behancePortfolio}>
                          {user.user.resume.portfolio.behancePortfolio}
                        </a>
                      </p>
                    )}
                    
                    {user.user.resume.portfolio.otherWorkSample && (
                      <p>
                        Other Work Sample:{" "}
                        <a className='text-blue-600' href={user.user.resume.portfolio.otherWorkSample}>
                          {user.user.resume.portfolio.otherWorkSample}
                        </a>
                      </p>
                    )}
                    {editPortfolioIndex !== null && (
                      <EditPortfolio portfolioData={user.user.resume.portfolio} onClose={()=>seteditPortfolioIndex(null)}/>
                    )}
                    <button className='text-sky-500 font-semibold flex mt-2'
                      onClick={()=> handleEditPortfolio(user.user.resume.portfolio, 0)}>
                      Add Protfolio Links 
                    </button>
                  </div>

                 ):(
                  <button className='text-sky-500 font-semibold flex mt-2'
                   onClick={togglePortfolioFormVisibility}>
                   <i className='ri-add-fill'></i> Add Protfolio / Work Samples 
                 </button>
                 )}
              
            </div>
          </div>
          {isAddPortfolioFormVisible && (
            <div className='Add-portfolio-from  min-h-[60vh] w-[85vw] lg:w-[50vw] fixed top-[60%] lg:top-[42%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
              <AddPortfolio onClose={togglePortfolioFormVisibility}/>
            </div>
          )}


         <div className='accomplishments py-4 lg:flex border-b-2'>
            <h1 className=''>ACCOMPLISHMENTS</h1>
            <div className='w-full  lg:ml-[23vh]  '>
              {user.user &&
                 user.user.resume &&
                 user.user.resume.accomplishments.map((accom, index)=>(
                  <div key={index} className=' mb-4'>
                    {editAccomIndex === index ? (
                      <div className='edit-from'>
                        <EditAccom onClose={handleCancleAccom} accomData={selectedAccom} />
                      </div>
                    ):(
                      <>
                      <h1 className='font-semibold'>{accom.accom}</h1>
                     
                      <button onClick={() => handleDeleteAccom(accom.id)}
                       className='px-4 mt-4 py-1 rounded-md mr-4 text-white bg-red-400'>
                        Delete
                      </button>
                      <button onClick={() => handleAccomEdit(accom, index)} className='px-5 mt-4 py-1 rounded-md mr-4 text-white bg-blue-400'>
                        Edit
                      </button>
                     </>
                    )}
                     
                  </div>
              ))}
              <button className='text-sky-500 font-semibold flex mt-2'
              onClick={toggleAddAccomplishmentFormVisibility}>
              <i className='ri-add-fill'></i> Add Accom
              </button>
            </div>
          </div>
          {isAddAccomplishmentFormVislible && (
            <div className='Add-job-from  min-h-[60vh] w-[85vw] lg:w-[50vw] fixed top-[60%] lg:top-[42%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
              <AddAccom onClose={toggleAddAccomplishmentFormVisibility}/>
            </div>
          )}
          




          


        </div>
    </div>
    
  )
}

export default Myresume