import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    isAuthenticated: false,
    error: null,
    jobDetails: {}, // Object to store job details by job ID
    internshipDetails: {}, // Object to store interrnship details by internship ID
  
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loaduser : (state, action) =>{
            state.user = action.payload
            state.isAuthenticated = true
            state.error = null
        },
        errors : (state , action) =>{
            state.error = action.payload
        },
        clearError : (state)=>{
            state.error = null
        },
        signout : (state, action) =>{
            state.user = null,
            state.isAuthenticated = false
            state.error = null
        },
        loadJobDetails : (state, action) =>{
              // Store job details in the jobDetails object using job ID as key
            const {jobId, jobDetails} = action.payload
            state.jobDetails[jobId] = jobDetails;
            // console.log(jobDetails)
        },
        loadInternshipDetails : (state, action) =>{
            // Store job details in the internshipDetails object using internship ID as key
          const {internshipId, internshipDetails} = action.payload
          state.internshipDetails[internshipId] = internshipDetails;
        //   console.log(internshipDetails)
          
      },
       // Add a reducer to handle updating job details
      updateJobDetails : (state, action) =>{
        state.jobDetails[action.payload.jobId] = action.payload.jobDetails
      },
      // Add a reducer to handle updating intership details
      updateInternshipDetails : (state, action) =>{
        state.internshipDetails[action.payload.internshipId] = action.payload.internshipDetails
      },

      setJobDetails: (state, action) => {
        state.jobDetails[action.payload.jobId] = action.payload.jobDetails;
      },

    //   setInternshipDetails: (state, action) => {
    //     state.internshipDetails[action.payload.internshipId] = action.payload.internshipDetails;
    //   },
    }
})


// Exporting action creators
export const {loaduser, errors, clearError,signout, loadJobDetails, loadInternshipDetails,updateJobDetails, setJobDetails, updateInternshipDetails} = userSlice.actions


// Exporting the reducer
export default userSlice.reducer;