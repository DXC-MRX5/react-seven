import { createSlice } from "@reduxjs/toolkit";
import Student from "./Components/Data";

export const StudentSlice=createSlice({
    name:'StudentsData',
    initialState:Student,
    reducers:{
        studentAdded:(state,action)=>{
            state.push(action.payload)
        },
        studentEdited:(state,action)=>{
            state[action.payload.id] = action.payload;
        }
    }
})

export const{studentAdded, studentEdited}=StudentSlice.actions

export default StudentSlice.reducer