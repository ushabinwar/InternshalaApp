import React, { useEffect } from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Studentsignin from './components/Authentication/Studentsignin';
import Studentsignup from './components/Authentication/Studentsignup';
import Employesignup from './components/Authentication/Employesignup';
import Employesignin from './components/Authentication/Employesignin';
import Employedash from './components/Authentication/Employedash';
import Studentdash from './components/Authentication/Studentdash';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserDetails } from './store/userAction';
import Changepassword from './components/StudentPages/Changepassword';
import Studentupdate from './components/StudentPages/Studentupdate';
import Myresume from './components/Resume/Myresume';
import AddGraduationForm from './components/Resume/AddGraduationForm';
import AddJobPost from './components/EmployePages/AddJobPost';
import ViewJob from './components/EmployePages/ViewJob';
import ViewInternship from './components/EmployePages/ViewInternship';
import EditInterrnshipPost from './components/EmployePages/EditInterrnshipPost';
import EmployeUpdate from './components/EmployePages/EmployeUpdate';



const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    //dispatch  loaduserdetails action to load user details when component mounts
    dispatch(loadUserDetails())
  }, [dispatch])
  
  
  return (
    <div className='min-h-screen'>
    
      
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/student/signup' element={<Studentsignup/>}></Route>
        <Route path='/student/signin' element={<Studentsignin/>}></Route>
        <Route path='/employe/signup' element={<Employesignup/>}></Route>
        <Route path='/employe/signin' element={<Employesignin/>}></Route>
        <Route path='/student/dashboard' element={user.isAuthenticated ? <Studentdash/> : <Studentsignin/>}></Route>
        <Route path='/employe/dashboard' element={user.isAuthenticated ? <Employedash/> : <Employesignin/>}></Route>
        <Route path='/change-password' element={user.isAuthenticated ? <Changepassword/> : <Studentsignin/>}></Route>
        <Route path='/studentupdate' element={<Studentupdate/>}></Route>
        <Route path='/resume' element={<Myresume/>}></Route>
        <Route path='/addgraducation' element={<AddGraduationForm/>}></Route>
        {/* <Route path='/jobform' element={<AddJobPost/>}></Route> */}
        <Route path='/view-job/:jobId' element={user.isAuthenticated ? <ViewJob/> : <Employesignin/>}></Route>
        <Route path='/view-internship/:internshipId' element={<EditInterrnshipPost/>}></Route>
        <Route path='/employe-update' element={<EmployeUpdate/>}></Route>
        
        
      </Routes>
    </div>
    
  )
}

export default App