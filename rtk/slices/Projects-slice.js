import { createSlice } from "@reduxjs/toolkit";
export const projectsSlice = createSlice({
    initialState : [],
    name : "projectsSlice",
    reducers : {
        viewData : (state , action) =>{
            state = action.payload;
            return state;
        } ,
    }
})
export const {viewData } = projectsSlice.actions;
export default projectsSlice.reducer;