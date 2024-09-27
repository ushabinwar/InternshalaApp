import { toast } from "react-toastify";
import axios from "../axios";
import { loaduser, errors, signout, loadJobDetails, loadInternshipDetails, setJobDetails, updateInternshipDetails} from "./userSlice";

export const asyncsignup = (newuser) => async (dispatch) =>{
    try{
        const {data} = await axios.post("/student/signup", newuser);
        console.log(data)
        dispatch(loaduser(data.user));// Dispatch action to update user state upon successful signup
    }catch(err){
         // If there's an error response from the server, dispatch the error message
         
        if(err.response && err.response.data && err.response.data.message){
            dispatch(errors( err.response.data.message))
        }else{
             // If there's no error message in the response, dispatch a generic error
            dispatch(errors("An error occurred during signup"))
        }
    }
};

export const asyncsignin = (newuser) => async (dispatch) => {
    try{
        const {data} = await axios.post("/student/signin", newuser, {withCredentials: true})
        dispatch(loaduser(data.user))
    }catch(err){
        dispatch(errors(err.response.data.message))
    }

}

export const loadUserDetails = () => async(dispatch)=>{
    try{
        const {data} = await axios.post("/student")
        // console.log(data)
        dispatch(loaduser(data.student))
    }catch(err){
        dispatch(errors(err.response.data.message))
    }
}

export const asyncsignout = () => async (dispatch) =>{
    try{
        await axios.get("/student/signout")
        dispatch(signout())
    }catch(err){
        dispatch(errors(err.response.data.message))
    }
}

export const asyncemployesignup = (newuser) => async (dispatch) =>{
    try{
        const {data} = await axios.post("/employe/signup", newuser );
        console.log(data)
        dispatch(loaduser(data.user));// Dispatch action to update user state upon successful signup
        toast.success("Sucessfully Signup")
    }catch(err){
         // If there's an error response from the server, dispatch the error message
         
        if(err.response && err.response.data && err.response.data.message){
            dispatch(errors( err.response.data.message))
            toast.error(err.response.data.message)
        }else{
             // If there's no error message in the response, dispatch a generic error
            dispatch(errors("An error occurred during signup"))
            toast.error("An error occurred during signup");
        }
    }
};

export const asyncemployesignin = (newuser) => async (dispatch) => {
    try{
        const {data} = await axios.post("/employe/signin", newuser, {withCredentials: true})
        dispatch(loaduser(data.user))
        console.log(data.user)
    }catch(err){
        dispatch(errors(err.response.data.message))
    }

}


export const loadEmployeDetails = () => async(dispatch)=>{
    try{
        const {data} = await axios.post("/employe/current")
        console.log(data)
        dispatch(loaduser(data.employe))
    }catch(err){
        dispatch(errors(err.response.data.message))
    }
}   

export const asyncemployesignout = () => async (dispatch) =>{
    try{
        await axios.get("/employe/signout")
        dispatch(signout())
    }catch(err){
        dispatch(errors(err.response.data.message))
    }
}



export const asynloaduser = () => async (dispatch) =>{
    dispatch(loadUserDetails())
}


export const updateUserDetails = (id, updatedUserData) => async (dispatch) => {
    try{
        const response = await axios.post(`/student/update/${id}`, updatedUserData, {withCredentials: true})
        // console.log(response.data)
        dispatch(asynloaduser(response.data.student))
    }catch(err){
        dispatch(errors(err.response.data.message))
    }

}

export const uploadAvatar = (userId, formData) => async (dispatch) => {
    try{
        console.log(formData)
        const response = await axios.post(`/student/avatar/${userId}`,formData)
        console.log(response)
        console.log("api run")
        dispatch(asynloaduser(response.data.student))
        toast.success("Avatar Uploded Successfully")
    }catch(err){
        dispatch(errors(err.response.data.message))
        toast.error(err.response.data.message)
        throw err;
    }

}


export const addEducation = (educationData) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/add-edu`, educationData)
        console.log(response)
        dispatch(asynloaduser())
    }catch(err){
        dispatch(errors(err.response.data.message))
        throw err;
    }

}

export const updateEducation = (educationData) => async (dispatch) => {
    try{
        // Make a request to update education data
        const response =   await axios.post(`resume/edit-edu/${educationData.id}`, educationData)
        console.log(response)
          // Assuming your API returns updated user data
        dispatch(asynloaduser(response.data.user))
    }catch(error){
        // Dispatch an error action if the request fails
        dispatch(errors(error.response.data.message))
        throw error; // Rethrow the error to handle it where the action is dispatched
    }

}


export const deleteEducation = (educationId) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/delete-edu/${educationId}`)
        console.log(response)
        dispatch(asynloaduser())
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}


export const addJob = (formData) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/add-job`, formData)
        console.log(response)
        dispatch(asynloaduser())
        toast.success("Job Added Sucessfully")
    }catch(error){
        dispatch(errors(error.response.data.message))
        toast.error(error.response.data.message)
        throw error;
    }

}

export const updateJob = (jobData, jobId) => async (dispatch) => {
    try{
        // Make a request to update job data
        const response =   await axios.post(`resume/edit-job/${jobId}`, jobData)
        console.log(response)
          // Assuming your API returns updated user data
        dispatch(asynloaduser(response.data.student))
    }catch(error){
        // Dispatch an error action if the request fails
        dispatch(errors(error.response.data.message))
        throw error; // Rethrow the error to handle it where the action is dispatched
    }

}


export const deleteJob = (jobId) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/delete-job/${jobId}`)
        console.log(response)
        dispatch(asynloaduser())
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}

export const addInternship = (formData) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/add-internship`, formData, {withCredentials: true})
        console.log(response)
        dispatch(asynloaduser())
        toast.success("Internship Added Sucessfully")
    }catch(error){
        dispatch(errors(error.response.data.message))
        toast.error(error.response.data.message)
        throw error;
    }

}

export const updateInternship = (internshipData, internshipId) => async (dispatch) => {
    try{
        // Make a request to update interhsip data
        const response =   await axios.post(`resume/edit-internship/${internshipId}`, internshipData)
        console.log(response)
          // Assuming your API returns updated user data
        dispatch(asynloaduser(response.data.student))
    }catch(error){
        // Dispatch an error action if the request fails
        dispatch(errors(error.response.data.message))
        throw error; // Rethrow the error to handle it where the action is dispatched
    }

}

export const deleteInternship = (internshipId) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/delete-internship/${internshipId}`)
        console.log(response)
        dispatch(asynloaduser())
        toast.success("Internship Deleted Successfully")
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        toast.error(error.response.data.message)
        throw error;
    }

}

export const addResponsibility = (formData) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/add-responsibilities/`, formData, {withCredentials:true})
        console.log(response)
        dispatch(asynloaduser())
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}

export const updateResponsibility = (respoData, respoId) => async (dispatch) => {
    try{
        // Make a request to update responsibility data
        const response =   await axios.post(`resume/edit-responsibilities/${respoId}`, respoData)
        console.log(response)
          // Assuming your API returns updated user data
        dispatch(asynloaduser(response.data.student))
    }catch(error){
        // Dispatch an error action if the request fails
        dispatch(errors(error.response.data.message))
        throw error; // Rethrow the error to handle it where the action is dispatched
    }

}
export const deleteResponsibility = (respoId) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/delete-responsibilities/${respoId}`)
        console.log(response)
        dispatch(asynloaduser())
        toast.success("Responsibility Deleted Successfully")
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        toast.error(error.response.data.message)
        throw error;
    }

}

export const addTraining = (formData) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/add-course/`, formData, {withCredentials:true})
        // console.log(response)
        dispatch(asynloaduser())
        toast.success("Training Added Successfully")
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}
export const updateTraining = (trainingId, trainingData,) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/edit-course/${trainingId}`, trainingData)
        // console.log(response)
        dispatch(asynloaduser(response.data.student))
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error; 
    }

}

export const deleteTraining = (courseId) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/delete-course/${courseId}`)
        console.log(response)
        dispatch(asynloaduser())
        toast.success("Training Deleted Successfully")
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        toast.error(error.response.data.message)
        throw error;
    }

}

export const addProject = (formData) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/add-project/`, formData, {withCredentials:true})
        // console.log(response)
        dispatch(asynloaduser())
        toast.success("Project Added Successfully")
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}

export const updateProject = (projectId, projectData,) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/edit-project/${projectId}`, projectData)
        // console.log(response)
        dispatch(asynloaduser(response.data.student))
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error; 
    }

}

export const deleteProject = (projectId) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/delete-project/${projectId}`)
        console.log(response)
        dispatch(asynloaduser())
        toast.success("Project Deleted Successfully")
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        toast.error(error.response.data.message)
        throw error;
    }

}

export const addSkill = (formData) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/add-skill/`, formData, {withCredentials:true})
        dispatch(asynloaduser())
        toast.success("Skill Added Successfully")
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}
export const updateSkill = (skillId, skillData,) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/edit-skill/${skillId}`, skillData)
        // console.log(response)
        dispatch(asynloaduser(response.data.student))
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error; 
    }

}
export const deleteSkill = (skillId) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/delete-skill/${skillId}`)
        // console.log(response)
        dispatch(asynloaduser())
        toast.success("Skill Deleted Successfully")
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        toast.error(error.response.data.message)
        throw error;
    }

}
export const addAccom = (formData) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/add-accomplishment/`, formData, {withCredentials:true})
        dispatch(asynloaduser())
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}
export const updateAccom = (accomId, accomData,) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/edit-accomplishment/${accomId}`, accomData)
        // console.log(response)
        dispatch(asynloaduser(response.data.resume))
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error; 
    }

}
export const deleteAccom = (accomId) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/delete-accomplishment/${accomId}`)
        // console.log(response)
        dispatch(asynloaduser())
        toast.success("Accomplishment Deleted Successfully")
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        toast.error(error.response.data.message)
        throw error;
    }

}
export const addPortfolio = (formData) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/add-portfolio`, formData, {withCredentials:true})
        console.log(response)
        dispatch(asynloaduser())
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}
export const updatePortfolio = ( portfolioData) => async (dispatch) => {
    try{
        const response =   await axios.post(`resume/edit-portfolio`, portfolioData, { withCredentials: true })
        console.log(response)
        dispatch(asynloaduser(response.data.resume))
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error; 
    }

}

export const asyncloademploye = () => async (dispatch) =>{
    dispatch(loadEmployeDetails());
}

export const addJobPost = (jobData) => async (dispatch) => {
    try{
        const response =   await axios.post(`/employe/job/create`, jobData)
        console.log(response)
        dispatch(asyncloademploye())
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}
export const addInternshipPost = (internshipData) => async (dispatch) => {
    try{
        const response =   await axios.post(`/employe/internship/create`, internshipData)
        console.log(response, "updted")
        dispatch(asyncloademploye())
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}

export const fetchJobDetails = (jobId) => async (dispatch) => {
    try{
        const {data} =   await axios.post(`/employe/job/read/${jobId}`) // Fetch job details by job ID
        console.log(data)
        dispatch(loadJobDetails({jobId, jobDetails:data}))
        
    }catch(error){
        console.error('Error fetching job details:', error);
    }

}

export const fetchInternshipDetails = (internshipId) => async (dispatch) => {
    try{
        const {data} =   await axios.post(`/employe/internship/read/${internshipId}`) // Fetch internship details by internship ID
        console.log(data)
        dispatch(loadInternshipDetails({internshipId, internshipDetails:data})) // Dispatch action to load internship details into Redux state
        
    }catch(error){
        console.error('Error fetching internship details:', error);
    }

}

export const updateJobPost = (jobId, jobData) => async (dispatch) => {
    try{
        const response =   await axios.post(`/employe/job/update/${jobId}`, jobData)
        console.log(response)
        dispatch(setJobDetails({jobId, jobDetails: response.data}))
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}

export const updateInternshipPost = (interhsipId, interhsipData) => async (dispatch) => {
    try{
        const response =   await axios.post(`/employe/internship/update/${interhsipId}`, interhsipData)
        console.log(response)
        dispatch(asyncloademploye())
        dispatch(updateInternshipDetails({interhsipId, interhsipDetails: response.data}))
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}

export const deleteJobPost = (jobId) => async (dispatch) => {
    console.log("action dispatched sucessdully")
    try{
        const response =   await axios.get(`/employe/job/delete/${jobId}`)
        console.log(response,"deletred")
        dispatch(asyncloademploye())
        
    }catch(error){
        dispatch(errors(error.response.data.message))
        throw error;
    }

}